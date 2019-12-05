<template>
  <div class="home">
      <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
        label="姓名"
        prop="username">
        </el-table-column>
        <el-table-column
        label="密码"
        prop="password">
        </el-table-column>
        <el-table-column
        label="手机号"
        prop="phone">
        </el-table-column>
        <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
            操作
        </template>
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.row)">Edit</el-button>
            <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">Delete</el-button>
        </template>
        </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        :page-size="limit"
        :total="total"
        @current-change="change"
        >
    </el-pagination>
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="curAdd">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        pagenum:1,
        limit:2,
        total:0,
        dialogFormVisible: false,
        form: {
            username:'',
            password:'',
            phone:''
        },
        formLabelWidth: '120px'
      }
    },
    created(){
        this.getData();
    },
    methods: {
      handleEdit(row) {
        this.dialogFormVisible = true;
        this.form = {
            ...row
        };
        
      },
      handleDelete(row) {
        this.$http.get('/api/del',{params:{id:row.id}}).then(res => {
            if(res.data.code === 1){
                alert("删除成功")
                this.getData();
            }else{
                alert(res.data.msg)
            }
        })
      },
      getData(){
          this.$http.get('/api/userlist',{params:{pagenum:this.pagenum,limit:this.limit}}).then(res => {
            if(res.data.code === 1){
                this.tableData = res.data.data;
                this.total = res.data.total;
            }else{
                alert(res.data.msg)
            }
        })
      },
      change(curPage){
          console.log(curPage);
          this.pagenum = curPage;
          this.getData();
      },
      //确定添加
      curAdd(){
          if(this.form.username && this.form.password){
              let url = '';

            //修改  添加
            if(this.form.id || this.form.id === 0){
                //修改
                url = '/api/update';
            }else{
                //添加
                url = '/api/add';
            }
            this.$http.post(url,{...this.form}).then(res => {
                if(res.data.code === 1){
                    alert(res.data.msg);
                    this.getData();
                }else{
                    alert(res.data.msg)
                }
                this.dialogFormVisible = false;
                this.form = {
                    username:'',
                    password:'',
                    phone:'',
                    id:''
                }
            })
          }else{
              alert("参数有误")
          }
      }
    },
  }
</script>
