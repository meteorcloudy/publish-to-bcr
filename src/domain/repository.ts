import os from "node:os";
import path from "node:path";
import {simpleGit, CleanOptions} from "simple-git";

export class Repository {
    private _checkoutPath: string|null = null;

    public static fromCanonicalName(canonicalName: string, isOrg: boolean) {
        const [owner, name] =
        canonicalName.split("/");
        const repository = new Repository(
        name,
        owner,
        `https://github.com/${canonicalName}.git`
      );
        return repository;
    }

    constructor(public readonly name: string, public readonly owner: string, public readonly url: string) {}

    public get canonicalName(): string {
        return `${this.owner}/${this.name}`;
    }

    public isCheckedOut(): boolean {
        return this._checkoutPath != null;
    }

    public get checkoutPath(): string {
        if (!this.isCheckedOut()) {
            throw new Error(`Repository ${this.canonicalName} is not checked out`);
        }
        return this._checkoutPath;
    }

    public async checkout(tagVersionOrBranch?: string): Promise<void> {
        if (!this.isCheckedOut()) {
            this._checkoutPath = path.join(os.tmpdir(), this.name);
            await simpleGit().clone(this.url, this._checkoutPath);
        }

        await simpleGit(this._checkoutPath).clean(CleanOptions.FORCE).checkout(tagVersionOrBranch);
    }
}