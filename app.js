myStore = new Ext.data.Store({
    storeId: 'myStore',
    autoLoad: false,
    proxy: new Ext.data.HttpProxy({
        url: "api.php"
    }),
    reader: new Ext.data.JsonReader({
        root: 'data',
        totalProperty: 'total',
        id: 'id',
        fields: [
            {name: 'name', mapping: 'name'},
            {name: 'city', mapping: 'city'},
            {name: 'address', mapping: 'address'},
            {name: 'index', mapping: 'index'},
            {name: 'phone', mapping: 'phone'}
        ]
    }),
    remoteSort: false
});

var grid = new Ext.grid.GridPanel({
    id: 'gridId',
    store: myStore,
    autoHeight : true,
    loadMask: true,

    colModel: new Ext.grid.ColumnModel({
        defaults: {
            width: 120,
            sortable: true
        },
        columns: [
            {header: 'Название отделения', width: 200, sortable: true, dataIndex: 'name'},
            {header: 'Город', dataIndex: 'city'},
            {header: 'Адрес', dataIndex: 'address'},
            {header: 'Индекс', dataIndex: 'index'},
            {header: 'Номер телефона', dataIndex: 'phone'}
        ]
    }),

    // listeners: {
    //     afterrender: function (grid) {
    //         grid.getStore().load();
    //     }
    // },

    viewConfig: {
        forceFit: true,
    },

    // sm: new Ext.grid.RowSelectionModel({singleSelect:true}),
    // width: 600,
    // height: 300,
    // frame: true,
    // title: 'Отделения Приватбанка',
    // iconCls: 'icon-grid',
})


Ext.onReady(function(){
    new Ext.Viewport({
        layout: 'fit',
        items: [{
            xtype: 'panel',
            title: 'Отделения Приватбанка',
            items: [{
                xtype: 'button',
                text: 'Загрузка',
                height: 30,
                width: 100,
                handler: function () {
                    grid.getStore().load()
                }
            }, grid]
        }]
    })
});








