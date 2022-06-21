import { View, Input, Button, Checkbox, CheckboxGroup } from '@tarojs/components'
import Taro, { FC } from '@tarojs/taro'
import { useEffect, useState } from 'react'
import request from '../../config/request'

const Index: FC<any> = () => {
  // 输入框的内容
  const [inputValue, setInputValue] = useState<any>('')
  // 列表
  const [todos, setTodos] = useState<Array<any>>([])
  // 选中的数据
  const [checkData, setCheckData] = useState<Array<any>>([])

  useEffect(() => {
    // request.get('http://localhost:41398/data/todos.json').then(res => {
    //   console.log(res)
    // }).catch(e => {
    //   console.log(e)
    // })
    // console.log(window.location.href)
  }, [])
  return (
    <View>
      <View style={{ display: 'flex' }}>
        <Input placeholder={'请输入todo'} value={inputValue} onInput={(e) => { setInputValue(e.detail.value) }} style={{width:'80%'}}/>
        <Button type='primary' size='mini' style={{width:'20%'}} onClick={() => {
          const arr = [...todos]
          const obj = {
            inputValue,
            checked: false
          }
          if (inputValue !== '') {
            arr.push(obj)
            setTodos(arr)
            setInputValue('')
          }
        }}>增加</Button>
      </View>
      <CheckboxGroup style={{ display: 'flex', flexDirection: 'column', minHeight: '200px', overflow: 'auto' }} onChange={e => {
        console.log(e)
        setCheckData(e.detail.value)
      }}>
        {todos.map((item, index) => {
          return <>
            <Checkbox key={index} className='checkbox-list__checkbox' value={item.inputValue} checked={item.checked}>{item.inputValue}<Button size='mini' onClick={() => {
              Taro.navigateTo({
                url: `/pages/todo-detail/index?value=${item}`
              })
            }}>查看详情</Button></Checkbox>
          </>
        })}
      </CheckboxGroup>
      <Button type='primary' onClick={() => {
        const arr = [...todos]
        const newarr = arr.filter((v) => { return !(checkData.indexOf(v.inputValue) > -1) })
        setTodos(newarr)
      }}>删除</Button>
    </View>
  )
}
export default Index
