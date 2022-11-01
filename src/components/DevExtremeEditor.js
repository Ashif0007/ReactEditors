import HtmlEditor, { Toolbar, Item } from "devextreme-react/html-editor";

const DevExtremeEditor = () => {
  const sizeValues = ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"];
  const fontValues = [
    "Arial",
    "Georgia",
    "Tahoma",
    "Times New Roman",
    "Verdana"
  ];
  const headerValues = [false, 1, 2, 3, 4, 5];

  return (
    <HtmlEditor>
      <Toolbar multiline={true}>
        <Item name="undo" />
        <Item name="redo" />
        <Item name="separator" />
        <Item name="size" acceptedValues={sizeValues} />
        <Item name="font" acceptedValues={fontValues} />
        <Item name="separator" />
        <Item name="bold" />
        <Item name="italic" />
        <Item name="strike" />
        <Item name="underline" />
        <Item name="separator" />
        <Item name="alignLeft" />
        <Item name="alignCenter" />
        <Item name="alignRight" />
        <Item name="alignJustify" />
        <Item name="separator" />
        <Item name="orderedList" />
        <Item name="bulletList" />
        <Item name="separator" />
        <Item name="header" acceptedValues={headerValues} />
        <Item name="separator" />
        <Item name="color" />
        <Item name="background" />
        <Item name="separator" />
        <Item name="link" />
        <Item name="image" />
        <Item name="separator" />
        <Item name="clear" />
        <Item name="codeBlock" />
        <Item name="blockquote" />
        <Item name="separator" />
      </Toolbar>
    </HtmlEditor>
  );
};

export default DevExtremeEditor;
