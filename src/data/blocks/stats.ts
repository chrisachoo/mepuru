export const statsBlockCode = `
import {
	Stat,
	Stats,
	StatDesc,
	StatTitle,
	StatValue
} from "~/components/ui/stats"

export function StatsRow() {
	return (
		<Stats
			class="w-full max-w-4xl rounded-box border border-base-300/80 bg-base-100"
			direction="responsive"
		>
			<Stat>
				<StatTitle>Downloads</StatTitle>
				<StatValue class="text-primary">31K</StatValue>
				<StatDesc>Jan 1st – Feb 1st</StatDesc>
			</Stat>
			<Stat>
				<StatTitle>New users</StatTitle>
				<StatValue class="text-secondary">4,200</StatValue>
				<StatDesc>↑ 400 (22%)</StatDesc>
			</Stat>
			<Stat>
				<StatTitle>Retention</StatTitle>
				<StatValue>86%</StatValue>
				<StatDesc>Target 90%</StatDesc>
			</Stat>
		</Stats>
	)
}
`.trim()
