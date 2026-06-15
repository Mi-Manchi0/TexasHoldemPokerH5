import { defineStore } from 'pinia'

export type AppTheme = 'dark' | 'light'

interface AppState {
  theme: AppTheme
  playerName: string
  chips: number
  onlinePlayers: number
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    theme: 'dark',
    playerName: 'Guest',
    chips: 12000,
    onlinePlayers: 238,
  }),
  getters: {
    formattedChips: (state) => state.chips.toLocaleString('zh-CN'),
  },
  actions: {
    addChips(amount: number) {
      this.chips += amount
    },
    setPlayerName(name: string) {
      this.playerName = name.trim() || 'Guest'
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
    },
  },
})
