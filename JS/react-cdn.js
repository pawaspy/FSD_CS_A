const parent = document.getElementById("root")
const element = React.createElement("h1", {}, "Shopping Cart");

const root = ReactDOM.createRoot(parent);
//root.render(element);

const item1 = React.createElement("li", {}, "item1");
const item2 = React.createElement("li", {}, "item2");
const list = React.createElement("ol", {}, item1, item2);
const para = <p>This is new paragraph</p>
const branch = <ul>
    <li>CSE</li>
    <li>ECE</li>
    <li>ME</li>
</ul>;
root.render([element, list, para, branch]);
