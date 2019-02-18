new Vue({
    el:'#app',
    data:{
        todo:[
            {
                id:1,
                content:'吃饭',
                f:true
            },
            {
                id:2,
                content:'睡觉',
                f:true
            },
            {
                id:3,
                content:'看书',
                f:true
            }
        ],
        activeIndex:-2,
        maskFlag:false,
        type:'A',
        tab:[
            {
                id:1,
                text:'A',
                style:'all'
            },
            {
                id:2,
                text:'F',
                style:'primary'
            },
            {
                id:3,
                text:'U',
                style:'danger'
            }
        ]
    },
    methods:{
        check(index){
            //判断我们的事情是否已完成
            if(this.todo[index].f){
                //已完成
                this.remove(index);
            }else{
                //未完成
                this.activeIndex = index;
                //显示确定栏
                this.maskFlag = true;
            }
        },
        confirmDelete(index){
            //点击确定删除
            this.remove(index);
        },
        remove(index){
            this.todo.splice(index,1);
        }
    },
    computed:{
        finished(){
            return this.todo.filter(function(item){
                return item.f?item:false;
            });
        },
        unfinished(){
            return this.todo.filter(function(item){
                return item.f?false:item;
            });
        },
        newTodo(){
            switch (this.type) {
                case 'A':
                    return this.todo;
                    break;
                case 'F':
                    return this.finished
                    break;
                case 'U':
                    return this.unfinished
                    break;
                default:
                    break;
            }
        }
    }
})