import React from 'react';
import { parse } from 'node-html-parser';

function getSVG(name) {
	const filepath = `/public/icons/${name}.svg`;
	const files = import.meta.glob('/public/icons/*.svg', {
		query: '?raw',
		import: 'default',
		eager: true,
	});

	if (!(filepath in files)) {
		throw new Error(`${filepath} not found`);
	}

	const root = parse(files[filepath]);
	const svgElement = root.querySelector('svg');
	if (!svgElement) {
		throw new Error('No <svg> element found in the file');
	}

	const { attributes, innerHTML } = svgElement;
	return { attributes, innerHTML };
}

const Icon = ({ icon, ...props }) => {
	const { attributes: baseAttributes, innerHTML } = getSVG(icon);

	// Merge the attributes from the SVG file with the additional props.
	// The additional props will override any duplicate keys.
	const svgAttributes = { ...baseAttributes, ...props };

	return (
		<svg
			{...svgAttributes}
			dangerouslySetInnerHTML={{ __html: innerHTML }}
		/>
	);
};

export default Icon;

