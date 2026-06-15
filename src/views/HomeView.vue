<script setup lang="ts">
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  CloseOutlined,
  CrownOutlined,
  FireOutlined,
  GiftOutlined,
  TableOutlined,
  WalletOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import brandMarkUrl from '@/assets/bgc.jpg'
import { clearAuthSession, getUserInfo } from '@/utils/auth'

const router = useRouter()
const userInfo = computed(() => getUserInfo())
const displayName = computed(() => userInfo.value?.name || userInfo.value?.phone || '玩家')

type SeatStatus = 'available' | 'busy' | 'reserved'

interface TableSeat {
  capacity: number
  id: string
  name: string
  note: string
  status: SeatStatus
}

interface TableGroup {
  id: string
  label: string
  name: string
  seats: TableSeat[]
}

const tableGroups: TableGroup[] = [
  {
    id: 'main',
    label: 'MAIN TABLE',
    name: '主厅桌台',
    seats: [
      { capacity: 6, id: 'A-01', name: 'A-01', note: '标准德州桌', status: 'available' },
      { capacity: 6, id: 'A-02', name: 'A-02', note: '近吧台', status: 'busy' },
      { capacity: 8, id: 'A-03', name: 'A-03', note: '长局优先', status: 'available' },
    ],
  },
  {
    id: 'vip',
    label: 'PRIVATE TABLE',
    name: '包厢桌台',
    seats: [
      { capacity: 8, id: 'V-01', name: 'V-01', note: '安静包厢', status: 'reserved' },
      { capacity: 10, id: 'V-02', name: 'V-02', note: '高额桌', status: 'available' },
    ],
  },
  {
    id: 'bar',
    label: 'BAR TABLE',
    name: '吧台桌台',
    seats: [
      { capacity: 4, id: 'B-01', name: 'B-01', note: '短局快开', status: 'available' },
      { capacity: 4, id: 'B-02', name: 'B-02', note: '观赛位', status: 'busy' },
    ],
  },
]

const seatStatusText: Record<SeatStatus, string> = {
  available: '可开台',
  busy: '使用中',
  reserved: '已预留',
}

const isTablePickerOpen = ref(false)
const selectedSeatId = ref('')

const selectedSeat = computed(() => {
  for (const group of tableGroups) {
    const seat = group.seats.find((item) => item.id === selectedSeatId.value)

    if (seat) return seat
  }

  return null
})

const totalAvailableSeats = computed(() =>
  tableGroups.reduce(
    (total, group) => total + group.seats.filter((seat) => seat.status === 'available').length,
    0,
  ),
)

const openTablePicker = () => {
  isTablePickerOpen.value = true
}

const closeTablePicker = () => {
  isTablePickerOpen.value = false
}

const selectSeat = (seat: TableSeat) => {
  if (seat.status !== 'available') return

  selectedSeatId.value = seat.id
}

const confirmTableSeat = () => {
  if (!selectedSeat.value) return

  message.success(`${selectedSeat.value.name} 桌位已选择`)
  closeTablePicker()
}

const handleLogout = async () => {
  clearAuthSession()
  await router.replace({
    name: 'login',
  })
}
</script>

<template>
  <main class="tab-page home-page" aria-label="首页">
    <section class="home-topbar">
      <div class="home-wordmark">
        <span>WULIN SCALE</span>
        <strong>無鳞</strong>
      </div>

      <button class="home-logout" type="button" @click="handleLogout">退出</button>
    </section>

    <section class="home-hero" aria-label="無鳞首页">
      <div class="home-hero-mark" aria-hidden="true">
        <img :src="brandMarkUrl" alt="" />
      </div>

      <div class="home-hero-copy">
        <p>THE SCALE BAR</p>
        <h1>欢迎回来，{{ displayName }}</h1>
        <span>今晚的牌桌已经亮起</span>
      </div>
    </section>

    <section class="home-action-grid" aria-label="快捷入口">
      <button
        class="home-action-tile home-action-button"
        type="button"
        aria-haspopup="dialog"
        :aria-expanded="isTablePickerOpen"
        @click="openTablePicker"
      >
        <TableOutlined class="home-action-icon" />
        <span>TABLE</span>
        <strong>开台</strong>
        <small>牌桌管理</small>
      </button>

      <RouterLink class="home-action-tile" :to="{ name: 'menu' }">
        <FireOutlined class="home-action-icon" />
        <span>ORDER</span>
        <strong>点单</strong>
        <small>酒水小食</small>
      </RouterLink>
    </section>

    <RouterLink class="home-account-card" :to="{ name: 'mine' }" aria-label="查看我的账号">
      <span class="home-account-avatar" aria-hidden="true"></span>
      <span class="home-account-copy">
        <strong>{{ displayName }}</strong>
        <small>欢迎加入 無鳞牌局</small>
      </span>
      <ArrowRightOutlined class="home-card-arrow" />
    </RouterLink>

    <section class="home-mini-grid" aria-label="服务入口">
      <RouterLink class="home-mini-card" :to="{ name: 'orders' }">
        <span>
          <strong>订单</strong>
          <small>ORDERS</small>
        </span>
        <CrownOutlined class="home-mini-icon" />
      </RouterLink>

      <RouterLink class="home-mini-card" :to="{ name: 'mine' }">
        <span>
          <strong>筹码</strong>
          <small>WALLET</small>
        </span>
        <WalletOutlined class="home-mini-icon" />
      </RouterLink>
    </section>

    <RouterLink class="home-gift-card" :to="{ name: 'menu' }" aria-label="查看会员礼遇">
      <div>
        <p>GIFT 礼遇</p>
        <strong>本周会员局</strong>
        <span>精选酒水与专属牌桌权益</span>
      </div>
      <GiftOutlined class="home-gift-icon" />
      <ArrowRightOutlined class="home-card-arrow" />
    </RouterLink>

    <section
      v-if="isTablePickerOpen"
      class="table-picker-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="选择桌位"
      @click.self="closeTablePicker"
    >
      <div class="table-picker-sheet">
        <header class="table-picker-head">
          <div>
            <p>OPEN TABLE</p>
            <h2>选择桌位</h2>
          </div>

          <button class="table-picker-close" type="button" aria-label="关闭" @click="closeTablePicker">
            <CloseOutlined />
          </button>
        </header>

        <div class="table-picker-stats" aria-label="桌台概览">
          <span>
            <strong>{{ tableGroups.length }}</strong>
            <small>桌台</small>
          </span>
          <span>
            <strong>{{ totalAvailableSeats }}</strong>
            <small>可开</small>
          </span>
        </div>

        <div class="table-group-list">
          <section v-for="group in tableGroups" :key="group.id" class="table-group">
            <header class="table-group-head">
              <div>
                <span>{{ group.label }}</span>
                <h3>{{ group.name }}</h3>
              </div>
              <small>{{ group.seats.length }} 个桌位</small>
            </header>

            <div class="table-seat-grid">
              <button
                v-for="seat in group.seats"
                :key="seat.id"
                class="table-seat-card"
                :class="[`is-${seat.status}`, { 'is-selected': selectedSeatId === seat.id }]"
                type="button"
                :disabled="seat.status !== 'available'"
                :aria-pressed="selectedSeatId === seat.id"
                @click="selectSeat(seat)"
              >
                <span class="table-seat-status">{{ seatStatusText[seat.status] }}</span>
                <strong>{{ seat.name }}</strong>
                <small>{{ seat.capacity }}人 · {{ seat.note }}</small>
                <CheckCircleFilled v-if="selectedSeatId === seat.id" class="table-seat-check" />
              </button>
            </div>
          </section>
        </div>

        <footer class="table-picker-foot">
          <span>{{ selectedSeat ? `${selectedSeat.name} 桌位` : '请选择一个可开桌位' }}</span>
          <button
            class="table-picker-confirm"
            type="button"
            :disabled="!selectedSeat"
            @click="confirmTableSeat"
          >
            确认开台
          </button>
        </footer>
      </div>
    </section>
  </main>
</template>
