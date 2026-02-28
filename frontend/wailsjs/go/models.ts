export namespace vault {
	
	export class Note {
	    id: string;
	    title: string;
	    path: string;
	    updatedAt: string;
	    content: string;
	    tags: string[];
	    pinned: boolean;
	    dirty: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Note(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	        this.path = source["path"];
	        this.updatedAt = source["updatedAt"];
	        this.content = source["content"];
	        this.tags = source["tags"];
	        this.pinned = source["pinned"];
	        this.dirty = source["dirty"];
	    }
	}
	export class Snapshot {
	    name: string;
	    rootPath: string;
	    notes: Note[];
	
	    static createFrom(source: any = {}) {
	        return new Snapshot(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.rootPath = source["rootPath"];
	        this.notes = this.convertValues(source["notes"], Note);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

