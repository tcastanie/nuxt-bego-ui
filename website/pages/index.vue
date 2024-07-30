<template>
  <BegoPage>
    <div class="grid gap-y-8">
      <BegoHero title="Welcome 🌺" description="Nuxt bego UI showcase" />
      <BegoHero
        title="Hero title"
        description="Hero description (can be used as page header)"
        headline="Hero headline"
        icon="i-mingcute-planet-line"
      />

      <BegoH1>Title H1</BegoH1>
      <BegoH2>Title H2</BegoH2>
      <BegoP>Paragraph ipsum consectetur mollit Duis consectetur aliqua quis anim enim commodo laboris nulla nulla eiusmod aute Duis ut proident deserunt. sint mollit voluptate adipiscing ex eiusmod incididunt magna do amet laborum mollit commodo do voluptate reprehenderit. ea anim qui anim sunt ut eu reprehenderit in voluptate laborum ad amet et minim ipsum eu do.</BegoP>

      <BegoDivider label="Divider" />

      <div class="flex gap-2 items-center flex-wrap">
        <BegoIcon icon="i-mingcute-planet-line" />
        <BegoIcon icon="i-mingcute-planet-line" size="md" />
        <BegoIcon icon="i-mingcute-planet-line" size="lg" />
        <BegoIcon icon="i-mingcute-planet-line" size="xl" />
        <BegoIcon icon="i-mingcute-planet-line" size="2xl" />
      </div>
      <div class="flex gap-2 flex-wrap">
        <BegoBadge>Venus</BegoBadge>
        <BegoBadge variant="outline">
          Earth
        </BegoBadge>
        <BegoBadge variant="soft">
          Mars
        </BegoBadge>
        <BegoBadge variant="subtle">
          Jupiter
        </BegoBadge>
      </div>
      <div class="flex gap-2">
        <BegoKbd>Ctrl + C</BegoKbd>
      </div>

      <BegoDivider type="dashed" size="xl" icon="i-mingcute-ufo-2-line" />

      <div class="flex gap-2 flex-wrap">
        <BegoButton>Solid</BegoButton>
        <BegoButton variant="outline">
          Outline
        </BegoButton>
        <BegoButton variant="soft">
          Soft
        </BegoButton>
        <BegoButton variant="ghost">
          Ghost
        </BegoButton>
        <BegoButton variant="link">
          Link
        </BegoButton>
      </div>
      <div class="flex gap-2 items-center flex-wrap">
        <BegoButton variant="outline" size="2xs">
          2xs
        </BegoButton>
        <BegoButton variant="outline" size="xs">
          xs
        </BegoButton>
        <BegoButton variant="outline">
          sm
        </BegoButton>
        <BegoButton variant="outline" size="md">
          md
        </BegoButton>
        <BegoButton variant="outline" size="lg">
          lg
        </BegoButton>
        <BegoButton variant="outline" size="xl">
          xl
        </BegoButton>
        <BegoButton variant="outline" size="2xl">
          2xl
        </BegoButton>
      </div>
      <div class="flex gap-2 items-center">
        <BegoButton block>
          block
        </BegoButton>
      </div>
      <div class="flex gap-2 items-center flex-wrap">
        <BegoButton to="/">
          NuxtLink to /
        </BegoButton>
        <BegoButton to="https://github.com/tcastanie/nuxt-bego-ui" target="_blank">
          External
        </BegoButton>
        <BegoButton to="/" white variant="link">
          White link
        </BegoButton>
        <BegoButton truncate>
          Truncated
        </BegoButton>
        <BegoButton truncate class="w-40">
          Custom truncate value
        </BegoButton>
      </div>
      <div class="flex gap-2 items-center flex-wrap">
        <BegoButton to="/" icon="i-mingcute-planet-line">
          Icon
        </BegoButton>
        <BegoButton to="/" icon="i-mingcute-planet-line" trailing>
          Icon trailing
        </BegoButton>
        <BegoButton to="/" icon="i-mingcute-planet-line" square />
        <BegoButton to="/" icon="i-mingcute-planet-line" :no-padding="true">
          No padding
        </BegoButton>
      </div>
      <div class="flex gap-2 items-center flex-wrap">
        <BegoButton to="/" loading>
          loading
        </BegoButton>
        <BegoButton to="/" loading loading-icon="i-mingcute-yinyang-fill">
          custom loading
        </BegoButton>
        <BegoButton disabled>
          disabled
        </BegoButton>
        <BegoButton variant="link" disabled>
          link disabled
        </BegoButton>
        <BegoButton to="/" disabled loading>
          with loading
        </BegoButton>
      </div>

      <BegoDivider type="dotted" size="xs" icon="i-mingcute-rocket-line" />

      <div class="grid gap-8">
        <BegoCard>
          Simple BegoCard
        </BegoCard>
        <BegoCard>
          <template #header>
            Card Header
          </template>
          BegoCard
          <template #footer>
            Card Header
          </template>
        </BegoCard>
        <BegoCard primary>
          BegoCard primary
        </BegoCard>
        <BegoCard to="/">
          BegoCard link
        </BegoCard>
      </div>
    </div>
  </BegoPage>
</template>
