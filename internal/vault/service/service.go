package service

import (
	"path/filepath"
	"regexp"
	"strings"

	"notnot/internal/vault"
	"notnot/internal/vault/store/filesystem"
)

var tagPattern = regexp.MustCompile(`(^|\s)(#[\p{L}\p{N}_/-]+)`)

type Service struct {
	store *filesystem.Store
}

func New(store *filesystem.Store) *Service {
	return &Service{store: store}
}

func (s *Service) Load(rootPath string) (vault.Snapshot, error) {
	files, err := s.store.ListMarkdownFiles(rootPath)
	if err != nil {
		return vault.Snapshot{}, err
	}

	notes := make([]vault.Note, 0, len(files))

	for _, file := range files {
		notes = append(notes, vault.Note{
			ID:        file.RelativePath,
			Title:     resolveTitle(file.RelativePath, file.Content),
			Path:      file.RelativePath,
			UpdatedAt: file.UpdatedAt,
			Content:   file.Content,
			Tags:      extractTags(file.Content),
			Pinned:    false,
			Dirty:     false,
		})
	}

	return vault.Snapshot{
		Name:     filepath.Base(rootPath),
		RootPath: rootPath,
		Notes:    notes,
	}, nil
}

func resolveTitle(relativePath string, content string) string {
	for _, line := range strings.Split(content, "\n") {
		trimmed := strings.TrimSpace(line)

		if strings.HasPrefix(trimmed, "# ") {
			return strings.TrimSpace(strings.TrimPrefix(trimmed, "# "))
		}
	}

	baseName := filepath.Base(relativePath)

	return strings.TrimSuffix(baseName, filepath.Ext(baseName))
}

func extractTags(content string) []string {
	matches := tagPattern.FindAllStringSubmatch(content, -1)
	if len(matches) == 0 {
		return nil
	}

	seen := make(map[string]struct{})
	tags := make([]string, 0, len(matches))

	for _, match := range matches {
		if len(match) < 3 {
			continue
		}

		tag := match[2]

		if _, exists := seen[tag]; exists {
			continue
		}

		seen[tag] = struct{}{}
		tags = append(tags, tag)
	}

	return tags
}
