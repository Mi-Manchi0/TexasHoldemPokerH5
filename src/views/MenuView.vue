<script setup lang="ts">
import {
  EnvironmentFilled,
  PlusCircleOutlined,
  RightOutlined,
} from '@ant-design/icons-vue'
import { computed, ref } from 'vue'

const categories = [
  { id: 'limited', label: '限定榜', note: 'LIMITED' },
  { id: 'popular', label: '热卖TOP', note: 'COLLECTION' },
  { id: 'classic', label: '经典奶咖', note: 'MILK' },
  { id: 'americano', label: '经典美式', note: 'AMERICANO' },
  { id: 'coldbrew', label: '冷萃系列', note: 'COLD BREW' },
  { id: 'lemon', label: '柠檬茶', note: 'LEMON' },
  { id: 'tea', label: '其他饮品', note: 'TEA' },
  { id: 'manual', label: '手冲咖啡', note: 'HANDMADE' },
] as const

const products = [
  {
    id: 1,
    category: 'limited',
    cup: 'velvet',
    label: 'LATTE COFFEE',
    name: '冷萃丝绒',
    price: 35,
    tag: '季节限定',
  },
  {
    id: 2,
    category: 'limited',
    cup: 'peach',
    label: 'LATTE COFFEE',
    name: '白桃拿铁',
    price: 35,
    tag: '季节限定',
  },
  {
    id: 3,
    category: 'limited',
    cup: 'roman',
    label: 'LATTE COFFEE',
    name: '罗马人美式',
    price: 35,
    tag: '季节限定',
  },
  {
    id: 4,
    category: 'limited',
    cup: 'classic',
    label: 'LATTE COFFEE',
    name: '拿铁咖啡',
    price: 35,
    tag: '季节限定',
  },
  {
    id: 5,
    category: 'popular',
    cup: 'cream',
    label: 'MILK COFFEE',
    name: '厚乳拿铁',
    price: 35,
    tag: '热卖单品',
  },
  {
    id: 6,
    category: 'americano',
    cup: 'black',
    label: 'AMERICANO',
    name: '黑金美式',
    price: 35,
    tag: '低糖轻负',
  },
] as const

const activeCategory = ref<(typeof categories)[number]['id']>('limited')

const activeCategoryInfo = computed(
  () => categories.find((category) => category.id === activeCategory.value) ?? categories[0],
)

const visibleProducts = computed(() => {
  const matchedProducts = products.filter((product) => product.category === activeCategory.value)

  return matchedProducts.length > 0 ? matchedProducts : products.slice(0, 4)
})
</script>

<template>
  <main class="tab-page menu-page" aria-label="点单">
    <header class="menu-location" aria-label="门店信息">
      <button class="menu-location-main" type="button">
        <EnvironmentFilled class="menu-location-icon" />
        <span>合肥万达广场店</span>
        <RightOutlined class="menu-location-arrow" />
      </button>

      <span class="menu-distance">距您5.98KM</span>

      <div class="menu-delivery-track" aria-label="配送提示">
        <span>每日满送券40元正在发放</span>
      </div>
    </header>

    <section class="menu-order-shell" aria-label="商品分类与列表">
      <aside class="menu-category-rail" aria-label="饮品分类">
        <button
          v-for="category in categories"
          :key="category.id"
          class="menu-category"
          :class="{ 'is-active': category.id === activeCategory }"
          type="button"
          @click="activeCategory = category.id"
        >
          <span>{{ category.label }}</span>
          <small>{{ category.note }}</small>
        </button>
      </aside>

      <div class="menu-products-pane">
        <section class="menu-section-head">
          <h1>{{ activeCategoryInfo.label }}</h1>
        </section>

        <section class="menu-promo" aria-label="咖啡推荐">
          <div class="menu-promo-copy">
            <p>COFFEE ALWAYS DELICATE</p>
            <strong>Freshly roasted beans and slow cream notes.</strong>
            <span>限定风味 · 今日供应</span>
          </div>

          <div class="menu-promo-art" aria-hidden="true">
            <span class="promo-plate"></span>
            <span class="promo-cup"></span>
            <span class="promo-bean bean-one"></span>
            <span class="promo-bean bean-two"></span>
            <span class="promo-bean bean-three"></span>
          </div>
        </section>

        <section class="menu-product-grid" aria-label="商品列表">
          <article
            v-for="product in visibleProducts"
            :key="product.id"
            class="menu-product-card"
          >
            <div class="menu-drink-art" :class="`is-${product.cup}`" aria-hidden="true">
              <span class="drink-shadow"></span>
              <span class="drink-cup">
                <span class="drink-foam"></span>
              </span>
            </div>

            <div class="menu-product-info">
              <h2>{{ product.name }}</h2>
              <p>{{ product.label }}</p>
              <span>{{ product.tag }}</span>
            </div>

            <div class="menu-product-foot">
              <strong>￥{{ product.price }}</strong>
              <button class="menu-add-button" type="button" :aria-label="`添加${product.name}`">
                <PlusCircleOutlined />
              </button>
            </div>
          </article>
        </section>
      </div>
    </section>
  </main>
</template>
