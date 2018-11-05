### vuex

#### getters

* getters
//过滤state中的数据，它是store的计算属性
//应用：在computed中引入
```js

import { mapGetters } from 'vuex';
computed:{
  ...mapGetters([]),//多个
  abc(){
    return this.$store.getters.abc
  }
}

```
