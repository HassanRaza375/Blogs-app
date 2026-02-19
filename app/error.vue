<script setup>
import { clearError } from "#app";

const props = defineProps({
  error: Object,
});
console.error("Error component received error:", props.error);
const goHome = async () => {
  await clearError({ redirect: "/" });
};

const reloadPage = () => {
  window.location.reload();
};
</script>

<template>
  <div class="errorbody">
    <div class="error-container">
      <div class="error-code">
        {{ error.errorCode || 500 }}
      </div>

      <h1>Oops! Something went wrong</h1>

      <p>
        {{
          error?.statusMessage ||
          "An unexpected error occurred. Please try again later."
        }}
      </p>

      <div class="actions">
        <button class="primary" @click="goHome">Go Home</button>
        <button @click="reloadPage">Reload</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --bg: #f5f7fb;
  --card-bg: #ffffff;
  --primary: #111827;
  --secondary: #6b7280;
  --danger: #ef4444;
  --border: #e5e7eb;
}

.errorbody {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-container {
  background: var(--card-bg);
  padding: 3rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  max-width: 420px;
  width: 100%;
  text-align: center;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-code {
  height: 70px;
  width: 70px;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  background: #fee2e2;
  color: var(--danger);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
}

h1 {
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

p {
  color: var(--secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

button {
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.2s ease;
  background: #000;
  color: white;
}

button.primary {
  color: #fff;
  border-color: var(--primary);
}
</style>
