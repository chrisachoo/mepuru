import { A } from "@solidjs/router"
import { Bell, Sparkles } from "lucide-solid"
import { createSignal } from "solid-js"
import {
	Alert,
	AlertDescription,
	AlertTitle
} from "~/components/ui/alert"
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage
} from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
	Card,
	CardBody,
	CardDescription,
	CardTitle
} from "~/components/ui/card"
import { Divider } from "~/components/ui/divider"
import {
	Stat,
	StatDesc,
	Stats,
	StatTitle,
	StatValue
} from "~/components/ui/stats"
import { Switch } from "~/components/ui/switch"
import { Tooltip } from "~/components/ui/tooltip"

export function BlocksOverviewGallery() {
	const [alertsOn, setAlertsOn] = createSignal(true)

	return (
		<div class="space-y-10">
			<div class="space-y-2">
				<h2 class="text-xl font-semibold tracking-tight text-base-content">
					Gallery
				</h2>
				<p class="max-w-2xl text-sm leading-relaxed text-base-content/70">
					Live compositions—the same primitives as the named blocks below, mixed so
					you can see how they feel together before you open a dedicated page.
				</p>
			</div>

			<div class="overflow-hidden rounded-2xl border border-base-300/80 bg-linear-to-br from-base-200/80 via-base-100 to-base-100 shadow-lg shadow-base-content/5">
				<div class="grid gap-0 lg:grid-cols-2">
					<div class="border-base-300/80 p-6 lg:border-e">
						<p class="mb-4 text-xs font-semibold uppercase tracking-wider text-primary/90">
							Dashboard tone
						</p>
						<Stats
							class="rounded-xl border border-base-300/60 bg-base-100"
							direction="responsive"
						>
							<Stat>
								<StatTitle>Latency</StatTitle>
								<StatValue class="text-primary">42ms</StatValue>
								<StatDesc>p95 last hour</StatDesc>
							</Stat>
							<Stat>
								<StatTitle>Errors</StatTitle>
								<StatValue class="text-success">0.02%</StatValue>
								<StatDesc>Within SLO</StatDesc>
							</Stat>
							<Stat>
								<StatTitle>Deploys</StatTitle>
								<StatValue>12</StatValue>
								<StatDesc>This week</StatDesc>
							</Stat>
						</Stats>
					</div>

					<div class="p-6">
						<p class="mb-4 text-xs font-semibold uppercase tracking-wider text-secondary">
							Team & surface
						</p>
						<div class="flex flex-col gap-5">
							<div class="flex flex-wrap items-center justify-between gap-4">
								<AvatarGroup class="-space-x-4">
									<Avatar>
										<AvatarImage
											src="https://picsum.photos/id/669/200/300"
											alt="Contributor"
										/>
										<AvatarFallback>LP</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage
											src="https://picsum.photos/id/656/200/300"
											alt="Contributor"
										/>
										<AvatarFallback>JP</AvatarFallback>
									</Avatar>
									<Avatar>
										<AvatarImage
											src="https://picsum.photos/id/633/200/300"
											alt="Contributor"
										/>
										<AvatarFallback>DR</AvatarFallback>
									</Avatar>
								</AvatarGroup>
								<div class="flex flex-wrap gap-2">
									<Badge
										size="sm"
										variant="primary"
									>
										Live
									</Badge>
									<Badge
										size="sm"
										variant="outline"
									>
										Design QA
									</Badge>
								</div>
							</div>

							<Card
								size="sm"
								class="border-base-300/70 bg-base-100/90"
							>
								<CardBody class="gap-2">
									<CardTitle class="text-sm">Inbox zero</CardTitle>
									<CardDescription class="text-xs">
										Triage queue cleared—ship the polish pass.
									</CardDescription>
									<Button
										size="xs"
										variant="primary"
									>
										Open queue
									</Button>
								</CardBody>
							</Card>
						</div>
					</div>
				</div>

				<Divider class="my-0 opacity-60" />

				<div class="grid gap-6 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
					<Alert variant="success">
						<AlertTitle>Checks passed</AlertTitle>
						<AlertDescription>
							Contrast, focus rings, and keyboard order look good on this theme.
						</AlertDescription>
					</Alert>

					<div class="flex flex-wrap items-center gap-3 lg:justify-end">
						<label class="flex cursor-pointer items-center gap-2 text-xs font-medium text-base-content/80">
							<Bell class="size-3.5 text-base-content/50" />
							Alerts
							<Switch
								checked={alertsOn()}
								onChange={e => setAlertsOn(e.currentTarget.checked)}
							/>
						</label>
						<Tooltip
							class="tooltip-primary"
							data-tip="Blocks deep-link to copy-ready JSX"
						>
							<Button
								size="xs"
								variant="ghost"
							>
								<Sparkles class="size-3.5" />
								Hint
							</Button>
						</Tooltip>
					</div>
				</div>
			</div>

			<p class="text-center text-xs text-base-content/50">
				Open a block for
				{" "}
				<A
					class="link link-primary font-medium"
					href="/blocks/hero-section/"
				>
					Hero
				</A>
				,
				{" "}
				<A
					class="link link-primary font-medium"
					href="/blocks/stats/"
				>
					Stats
				</A>
				, or
				{" "}
				<A
					class="link link-primary font-medium"
					href="/blocks/login/"
				>
					Login
				</A>
				{" "}
				with Preview / JSX tabs.
			</p>
		</div>
	)
}
