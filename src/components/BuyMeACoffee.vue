<template>
  <a
    :href="`https://www.buymeacoffee.com/${username}`"
    target="_blank"
    rel="noopener noreferrer"
    class="buy-me-coffee-btn"
    :class="variant === 'compact' ? 'compact' : 'default'"
  >
    <svg
      class="coffee-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
    <span class="button-text">{{ text }}</span>
  </a>
</template>

<script setup lang="ts">
interface Props {
  username?: string
  text?: string
  variant?: 'default' | 'compact'
}

withDefaults(defineProps<Props>(), {
  username: 'fvienot',
  text: 'Buy Me A Coffee',
  variant: 'default',
})
</script>

<style scoped>
.buy-me-coffee-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  text-decoration: none;
}

@media (min-width: 768px) {
  .buy-me-coffee-btn {
    padding: 0.75rem 1.5rem;
  }
}

.buy-me-coffee-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.buy-me-coffee-btn:active {
  transform: translateY(0);
}

.buy-me-coffee-btn.compact {
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
}

@media (min-width: 640px) {
  .buy-me-coffee-btn.compact {
    padding: 0.5rem 1rem;
  }
}

.coffee-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.buy-me-coffee-btn.compact .coffee-icon {
  width: 1rem;
  height: 1rem;
}

.button-text {
  white-space: nowrap;
}
</style>
