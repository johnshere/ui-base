export default function listeners(this: any, events?: Record<string, any>) {
  // @ts-ignore
  if (process.env.VUE_VERSION === '3') {
    const listeners = {}
    Object.keys(this.$attrs).forEach(key => {
      if (key.startsWith('on')) {
        const newKey = key.slice(2)[0].toLowerCase() + key.slice(3)
        listeners[newKey] = this.$attrs[key]
      }
    })
    return { ...listeners, ...events }
  } else {
    return { ...this.$listeners, ...events }
  }
}