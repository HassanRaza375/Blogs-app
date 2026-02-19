<template>
  <footer class="bg-gray-50 border-t border-gray-200 mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <NuxtLink to="/" class="text-2xl font-bold text-gray-900">
            MyBlog
          </NuxtLink>
          <p class="mt-4 text-gray-600 text-sm leading-relaxed">
            Sharing insights, tutorials, and stories about web development,
            design, and modern technology.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-900 uppercase tracking-wider"
          >
            Navigation
          </h3>
          <ul class="mt-4 space-y-3">
            <li><NuxtLink to="/" class="footer-link">Home</NuxtLink></li>
            <li><NuxtLink to="/blog" class="footer-link">Blog</NuxtLink></li>
            <li><NuxtLink to="/about" class="footer-link">About</NuxtLink></li>
            <li>
              <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-900 uppercase tracking-wider"
          >
            Categories
          </h3>
          <ul class="mt-4 space-y-3">
            <li>
              <NuxtLink to="/category/frontend" class="footer-link"
                >Frontend</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/category/backend" class="footer-link"
                >Backend</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/category/design" class="footer-link"
                >Design</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/category/tutorials" class="footer-link"
                >Tutorials</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3
            class="text-sm font-semibold text-gray-900 uppercase tracking-wider"
          >
            Subscribe
          </h3>
          <p class="mt-4 text-sm text-gray-600">
            Get the latest posts delivered right to your inbox.
          </p>
          <form class="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              class="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              class="px-4 py-2 bg-black text-white rounded-r-lg hover:bg-gray-800 transition"
            >
              →
            </button>
          </form>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center"
      >
        <p class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} MyBlog. All rights reserved.
        </p>

        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-500 hover:text-black transition"
            >Twitter</a
          >
          <a href="#" class="text-gray-500 hover:text-black transition"
            >GitHub</a
          >
          <a href="#" class="text-gray-500 hover:text-black transition"
            >LinkedIn</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-gray-600 hover:text-black text-sm transition;
}
</style>
