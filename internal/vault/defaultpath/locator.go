package defaultpath

import (
	"os"
	"path/filepath"
)

const vaultDirectoryName = "test-vault"

func Resolve() (string, error) {
	candidates := make([]string, 0, 2)

	workingDirectory, err := os.Getwd()
	if err == nil {
		candidates = append(candidates, filepath.Join(workingDirectory, vaultDirectoryName))
	}

	executablePath, err := os.Executable()
	if err == nil {
		candidates = append(candidates, filepath.Join(filepath.Dir(executablePath), vaultDirectoryName))
	}

	for _, candidate := range candidates {
		info, err := os.Stat(candidate)
		if err != nil {
			continue
		}

		if info.IsDir() {
			return candidate, nil
		}
	}

	return "", os.ErrNotExist
}
