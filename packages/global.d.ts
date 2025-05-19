declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VUE_VERSION: string;
        }
    }
}
declare module 'vue' {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        UTitle: typeof import('ui-base')['UTitle']
        UTitleCard: typeof import('ui-base')['UTitleCard']
        UPageTable: typeof import('ui-base')['UPageTable'] & typeof import('element-ui')['Table']
        UTop: typeof import('ui-base')['UTop']
        URichEditor: typeof import('ui-base')['URichEditor']
        URichView: typeof import('ui-base')['URichView']
        UColPreset: typeof import('ui-base')['UColPreset'] & typeof import('element-ui')['Col']
        UTeleport: typeof import('ui-base')['UTeleport']
        UConfirmDelete: typeof import('ui-base')['UConfirmDelete']

        UForm: typeof import('ui-base')['UForm'] & typeof import('element-ui')['Form']
        UFormItem: typeof import('ui-base')['UFormItem'] & typeof import('element-ui')['FormItem']
        UInput: typeof import('ui-base')['UInput'] & typeof import('element-ui')['Input']
        USelect: typeof import('ui-base')['USelect'] & typeof import('element-ui')['Select']
        URadio: typeof import('ui-base')['URadio'] & typeof import('element-ui')['Radio']
        URadioGroup: typeof import('ui-base')['URadioGroup'] & typeof import('element-ui')['RadioGroup']
        UCheckbox: typeof import('ui-base')['UCheckbox'] & typeof import('element-ui')['Checkbox']
        UCascader: typeof import('ui-base')['UCascader'] & typeof import('element-ui')['Cascader']
        UDatePicker: typeof import('ui-base')['UDatePicker'] & typeof import('element-ui')['DatePicker']

        UDialog: typeof import('ui-base')['UDialog'] & typeof import('element-ui')['Dialog']
        UButton: typeof import('ui-base')['UButton'] & typeof import('element-ui')['Button']
        ULink: typeof import('ui-base')['ULink'] & typeof import('element-ui')['Link']
        UDescriptions: typeof import('ui-base')['UDescriptions'] & typeof import('element-ui')['Descriptions']
        UTable: typeof import('ui-base')['UTable'] & typeof import('element-ui')['Table']
        UTableColumn: typeof import('element-ui')['TableColumn']
        UPagination: typeof import('ui-base')['UPagination'] & typeof import('element-ui')['Pagination']
    }
}
  

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
