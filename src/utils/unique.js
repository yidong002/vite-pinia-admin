// 数组去重
export const unique = (arr) => {
  if(arr.every(item => typeof item !== 'object')) {
    return Array.from(new Set(arr))
  }
  
  return [...new Set(arr.map(item => {
    if(item instanceof Array) {
        return unique(item)
    } 
    
    return JSON.stringify(item)
  }))].map(item => JSON.parse(item))
}