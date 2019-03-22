* 定义组件--组件==class
```js
  //class 组件名 extends React.component{
  //    render(){
  //    }
  //}
```
* 使用组件

```js
  ReactDOM.render(
    组件名,
    document.getElementById('')
  )
```
### 生命周期
constructor()
componentWillMount()
componentWillReceiveProps()
componentDidMount()
render()
componentWillUpMount()

state 用于改变组件内容状态的值
props 用于组件通信进行全传值

### 有状态组件
class xx extends Component
  * 可拥有状态
  * 拥有生命周期
  * 可通过this来接收状态和属性
  * this.state.a & this.props.b
  可在需要管理状态，或需要使用生命周期时使用
### 无状态组件
  const xx = (props) =>{}
  * 不可拥有状态
  * 不可拥有生命周期
  * 可通过属性实现数据传输
  * props.a
