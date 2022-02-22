/**
 * External dependencies
 */
import type { ComponentMeta, ComponentStory } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Text } from '../../text';
import { Divider } from '..';

export default {
	component: Divider,
	title: 'Components (Experimental)/Divider',
	argTypes: {
		margin: {
			control: { type: 'number' },
		},
		marginStart: {
			control: { type: 'number' },
		},
		marginEnd: {
			control: { type: 'number' },
		},
		// TODO: This is a reakit internal prop. We can hide it from the props table like this
		// if we don't want to expose it, but should we rather omit it at the TypeScript level?
		unstable_system: {
			table: { disable: true },
		},
	},
	parameters: {
		controls: { expanded: true },
	},
} as ComponentMeta< typeof Divider >;

const HorizontalTemplate: ComponentStory< typeof Divider > = ( args ) => (
	<div>
		<Text>Some text before the divider</Text>
		<Divider { ...args } />
		<Text>Some text after the divider</Text>
	</div>
);

const VerticalTemplate: ComponentStory< typeof Divider > = ( args ) => {
	const styles = {
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'start',
	};

	return (
		<div style={ styles }>
			<Text>Some text before the divider</Text>
			<Divider { ...args } />
			<Text>Some text after the divider</Text>
		</div>
	);
};

export const Horizontal: ComponentStory<
	typeof Divider
> = HorizontalTemplate.bind( {} );
Horizontal.args = {
	margin: 2,
};

export const Vertical: ComponentStory< typeof Divider > = VerticalTemplate.bind(
	{}
);
Vertical.args = {
	...Horizontal.args,
	orientation: 'vertical',
};
