<template>
<div class="container-fluid">
    <div class="col-md-12">
        <el-button >Click Me</el-button>
        <el-button type="primary" >Click Me</el-button>
        <el-button type="danger" >Click Me</el-button>
        <el-button type="warning">Click Me</el-button>

        <el-button type="success" :icon="Check" circle/>
        <el-button type="danger" :icon="Delete" circle/>
        <el-button type="warning" :icon="Star" circle/>
        <el-button type="primary" :icon="Edit" circle/>
        <el-button type="info" :icon="Message" circle/>
        <el-button  :icon="Search" circle/>

        <el-row class="mt-4 mb-4">
            <el-button disabled> Disabled </el-button>
            <el-button disabled type="primary">Primary </el-button>
            <el-button disabled type="danger">Danger</el-button>
            <el-button disabled type="warning">Warning</el-button>
            <el-button disabled type="info">Info</el-button>
            <el-button disabled type="success">Success</el-button>
        </el-row> 

        <el-row class="mb-4 mt-4">
            <el-button plain disabled> Disabled </el-button>
            <el-button plain disabled type="primary">Primary </el-button>
            <el-button plain disabled type="danger">Danger</el-button>
            <el-button plain disabled type="warning">Warning</el-button>
            <el-button plain disabled type="info">Info</el-button>
            <el-button plain disabled type="success">Success</el-button>
        </el-row>

        <h2>Basic Link Buttons</h2>
        <div class="flex jusstify-content-space-between mb-4 flex-wrap gap-4">
            <el-button
                v-for="button in buttons" 
                :key="button" 
                :type="button.type"
                link>
                {{ button.text }}
            </el-button>
        </div>
        <h2>Disabled Link Buttons</h2>
            <el-button
                v-for="button in buttons" 
                :key="button" 
                :type="button.type"
                link
                disabled
                >
                {{ button.text }}
            </el-button>
        <h2>Disabled Link Buttons</h2>
            <el-button
                v-for="button in buttons" 
                :key="button" 
                :type="button.type"
                text
                bg
                >
                {{ button.text }}
            </el-button>

        <h2>icons</h2>
            <div class="flex">
                <el-button type="primary" :icon="Edit" />
                <el-button type="primary" :icon="Share" />
                <el-button type="primary" :icon="Search">Search</el-button>
                <el-button type="primary">
                Upload <el-icon class="el-icon--right"><upload/></el-icon>
                </el-button>
            </div>
        <h2>Icons</h2>
            <el-button-group>
                <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
                <el-button type="primary">
                Next Page <el-icon class="icon--right"><ArrowRight/></el-icon>
                </el-button>
            </el-button-group>    

            <el-button-group class="ms-4">
                <el-button type="primary" :icon="Edit" />
                <el-button type="primary" :icon="Share" />
                <el-button type="primary" :icon="Delete" />
            </el-button-group>
    </div>
</div>
</template>
<script setup>
import {
    Check, 
    Delete, 
    Edit, 
    Message, 
    Search, 
    Star,
    Share,
    Upload,
    ArrowLeft,
    ArrowRight,
  
}from  '@element-plus/icons-vue'

const buttons = [
    { type: '', text: 'plain'},
    { type: 'primary', text: 'primary'},
    { type: 'success', text: 'success'},
    { type: 'info', text: 'info'},
    { type: 'warning', text: 'warning'},
    { type: 'danger', text: 'danger'},
]
</script>