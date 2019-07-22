export default function({ types: t }) {
  return {
    visitor: {
      Program(path, state) {
        const property = state.opts.property || 'data-test';

        path.traverse({
          JSXElement(path2) {
            let nodeName = '';
            path2.traverse({
              JSXIdentifier(path3) {
                nodeName = path3.node.name;
              },
            });

            path2.node.openingElement.attributes.push(
              t.jSXAttribute(t.jSXIdentifier(property), t.stringLiteral(nodeName)),
            );
          },
        });
      },
    },
  };
}
