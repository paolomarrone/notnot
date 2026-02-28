package filesystem

import (
	"io/fs"
	"os"
	"path/filepath"
	"sort"
	"strings"
)

type MarkdownFile struct {
	AbsolutePath string
	RelativePath string
	UpdatedAt    string
	Content      string
}

type Store struct{}

func NewStore() *Store {
	return &Store{}
}

func (s *Store) ListMarkdownFiles(rootPath string) ([]MarkdownFile, error) {
	var files []MarkdownFile

	err := filepath.WalkDir(rootPath, func(path string, entry fs.DirEntry, walkErr error) error {
		if walkErr != nil {
			return walkErr
		}

		if entry.IsDir() {
			return nil
		}

		if strings.ToLower(filepath.Ext(path)) != ".md" {
			return nil
		}

		info, err := entry.Info()
		if err != nil {
			return err
		}

		relativePath, err := filepath.Rel(rootPath, path)
		if err != nil {
			return err
		}

		content, err := os.ReadFile(path)
		if err != nil {
			return err
		}

		files = append(files, MarkdownFile{
			AbsolutePath: path,
			RelativePath: filepath.ToSlash(relativePath),
			UpdatedAt:    info.ModTime().Format("2006-01-02 15:04"),
			Content:      string(content),
		})

		return nil
	})
	if err != nil {
		return nil, err
	}

	sort.Slice(files, func(i, j int) bool {
		return files[i].RelativePath < files[j].RelativePath
	})

	return files, nil
}
