<script setup lang="ts">
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  ClockCircleOutlined,
  CoffeeOutlined,
  CreditCardOutlined,
  DownOutlined,
  PlusOutlined,
  ShoppingOutlined,
  TableOutlined,
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const orderDays = [
  { date: '15', label: 'MON' },
  { date: '16', label: 'TUE' },
  { date: '17', label: 'WED' },
  { date: '18', label: 'THU' },
  { date: '19', label: 'FRI' },
  { date: '20', label: 'SAT' },
  { date: '21', label: 'SUN' },
] as const

const orderStats = [
  { label: '进行中', value: '3' },
  { label: '待结算', value: '1' },
  { label: '已完成', value: '8' },
] as const

const timelineOrders = [
  {
    amount: '¥860',
    detail: '买入筹码 ¥600 · 高球 2 杯 · 坚果拼盘',
    icon: TableOutlined,
    meta: 'A-03 桌 · 德州局',
    status: '进行中',
    statusTone: 'live',
    tag: '牌局',
    time: '18:30',
    title: 'A-03 私人桌开台',
  },
  {
    amount: '¥188',
    detail: 'Smoke Highball x2 · 青柠气泡水 x1',
    icon: CoffeeOutlined,
    meta: '吧台已接单 · 预计 6 分钟',
    status: '出品中',
    statusTone: 'making',
    tag: '酒水',
    time: '19:10',
    title: '吧台酒水补单',
  },
  {
    amount: '¥300',
    detail: '玩家追加筹码 · 记入本桌总账',
    icon: CreditCardOutlined,
    meta: 'A-03 桌 · 李先生',
    status: '待确认',
    statusTone: 'pending',
    tag: '筹码',
    time: '20:00',
    title: 'A-03 追加买入',
  },
  {
    amount: '¥1,348',
    detail: '桌费 · 酒水 · 小食 · 筹码记录已汇总',
    icon: ShoppingOutlined,
    meta: 'A-01 桌 · 已通知结账',
    status: '已完成',
    statusTone: 'done',
    tag: '结算',
    time: '21:30',
    title: 'A-01 整桌结算',
  },
] as const

const handleBack = async () => {
  if (window.history.length > 1) {
    router.back()
    return
  }

  await router.push({ name: 'home' })
}
</script>

<template>
  <main class="tab-page orders-page" aria-label="订单">
    <section class="orders-topbar" aria-label="订单导航">
      <button class="orders-icon-button" type="button" aria-label="返回" @click="handleBack">
        <ArrowLeftOutlined />
      </button>

      <strong>無鳞订单</strong>

      <button class="orders-text-button" type="button">牌桌</button>
    </section>

    <section class="orders-hero" aria-label="今日订单概览">
      <div>
        <p>SESSION 06.15</p>
        <h1>今晚订单</h1>
      </div>

      <div class="orders-shift-pill">
        <CalendarOutlined />
        <span>18:00-02:00</span>
      </div>
    </section>

    <section class="orders-day-strip" aria-label="订单日期">
      <button
        v-for="day in orderDays"
        :key="day.date"
        class="orders-day"
        :class="{ 'is-active': day.date === '15' }"
        type="button"
      >
        <small>{{ day.label }}</small>
        <span>{{ day.date }}</span>
      </button>
    </section>

    <section class="orders-stat-strip" aria-label="订单状态">
      <div v-for="stat in orderStats" :key="stat.label" class="orders-stat">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </section>

    <section class="orders-timeline" aria-label="今日订单">
      <div class="orders-section-heading">
        <h2>今日订单</h2>
        <span>按下单时间排列</span>
      </div>

      <ol class="orders-timeline-list">
        <li v-for="order in timelineOrders" :key="`${order.time}-${order.title}`" class="orders-row">
          <time>{{ order.time }}</time>

          <span class="orders-rail" :class="`is-${order.statusTone}`" aria-hidden="true">
            <CheckCircleFilled v-if="order.statusTone === 'done'" />
          </span>

          <article class="orders-card" :class="`is-${order.statusTone}`">
            <div class="orders-card-head">
              <div>
                <span>{{ order.tag }}</span>
                <h3>{{ order.title }}</h3>
              </div>

              <button class="orders-card-toggle" type="button" aria-label="展开订单">
                <DownOutlined />
              </button>
            </div>

            <div class="orders-card-meta">
              <component :is="order.icon" />
              <span>{{ order.meta }}</span>
            </div>

            <div class="orders-card-meta">
              <ClockCircleOutlined />
              <span>{{ order.detail }}</span>
            </div>

            <div class="orders-card-foot">
              <span class="orders-status" :class="`is-${order.statusTone}`">{{ order.status }}</span>
              <strong>{{ order.amount }}</strong>
            </div>
          </article>
        </li>
      </ol>
    </section>

    <button class="orders-add-button" type="button" aria-label="新增订单">
      <PlusOutlined />
    </button>
  </main>
</template>
