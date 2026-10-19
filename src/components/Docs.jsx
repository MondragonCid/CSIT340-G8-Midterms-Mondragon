import Section from "./Section";

export default function Docs() {
  return (
    <main className="px-20 pt-4">
      <Section
        title="Create"
        description="Creates an empty Git repository in the current folder."
        code="git init"
      />
      <Section
        title="Rename"
        description="Renames the current branch to main."
        code="git branch -M main"
      />
      <Section
        title="Upload"
        description="Sends the main branch to the remote named origin."
        code="git push -u origin main"
      />
    </main>
  );
}