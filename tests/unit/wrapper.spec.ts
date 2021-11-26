import { shallowMount,Wrapper } from '@vue/test-utils'
import Wrap from '@/components/Wrapper.vue'


let wrapper: Wrapper<Wrap & {
    [key: string]: any;
  }>;

describe('Wrapper.vue',()=>{
   it('checck wrapper instance',async()=>{
    
     wrapper = shallowMount(Wrap,{
        propsData:{
            msg:'hello'
        }
    })

    expect(wrapper.vm.counter).toBe(0)
    await wrapper.find('#btn').trigger('click')
    expect(wrapper.vm.counter).toBe(1)
    
   })
})