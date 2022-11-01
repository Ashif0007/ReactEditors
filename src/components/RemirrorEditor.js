import { SocialEditor } from "@remirror/react-editors/social";
const RemirrorEditor = () => {
  const USERS = [
    { id: "joe", label: "Joe" },
    { id: "john", label: "John" }
  ];
  const TAGS = ["remirror", "editor"];

  return (
    <div style={{ padding: 16 }}>
      <SocialEditor users={USERS} tags={TAGS} />
    </div>
  );
};
export default RemirrorEditor;
