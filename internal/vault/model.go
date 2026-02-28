package vault

type Snapshot struct {
	Name     string `json:"name"`
	RootPath string `json:"rootPath"`
	Notes    []Note `json:"notes"`
}

type Note struct {
	ID        string   `json:"id"`
	Title     string   `json:"title"`
	Path      string   `json:"path"`
	UpdatedAt string   `json:"updatedAt"`
	Content   string   `json:"content"`
	Tags      []string `json:"tags"`
	Pinned    bool     `json:"pinned"`
	Dirty     bool     `json:"dirty"`
}
