package main

import (
	"context"

	"notnot/internal/vault"
	"notnot/internal/vault/defaultpath"
	"notnot/internal/vault/service"
	"notnot/internal/vault/store/filesystem"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx          context.Context
	vaultService *service.Service
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		vaultService: service.New(filesystem.NewStore()),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) OpenVault() (vault.Snapshot, error) {
	selectedPath, err := runtime.OpenDirectoryDialog(a.ctx, runtime.OpenDialogOptions{
		Title: "Open markdown vault",
	})
	if err != nil {
		return vault.Snapshot{}, err
	}

	if selectedPath == "" {
		return vault.Snapshot{}, nil
	}

	return a.vaultService.Load(selectedPath)
}

func (a *App) LoadDefaultVault() (vault.Snapshot, error) {
	vaultPath, err := defaultpath.Resolve()
	if err != nil {
		return vault.Snapshot{}, nil
	}

	return a.vaultService.Load(vaultPath)
}
