declare global {
    namespace NodeJS {
        interface ProcessEnv {
            VUE_VERSION: string;
            KRPANO_PLUGIN_VERSION: string;
        }
    }
}
declare module 'vue' {
    // GlobalComponents for Volar
    export interface GlobalComponents {
        UTitle: typeof import('ui-base')['UTitle']
        UTitleCard: typeof import('ui-base')['UTitleCard']
        UPageTable: typeof import('ui-base')['UPageTable']
        UTop: typeof import('ui-base')['UTop']
        URichEditor: typeof import('ui-base')['URichEditor']
        URichView: typeof import('ui-base')['URichView']
        UColPreset: typeof import('ui-base')['UColPreset']
        UTeleport: typeof import('ui-base')['UTeleport']
        UConfirmDelete: typeof import('ui-base')['UConfirmDelete']

        UForm: typeof import('ui-base')['UForm']
        UFormItem: typeof import('ui-base')['UFormItem']
        UInput: typeof import('ui-base')['UInput']
        USelect: typeof import('ui-base')['USelect']
        URadio: typeof import('ui-base')['URadio']
        URadioGroup: typeof import('ui-base')['URadioGroup']
        UCascader: typeof import('ui-base')['UCascader']
        UDatePicker: typeof import('ui-base')['UDatePicker']

        UDialog: typeof import('ui-base')['UDialog']
        UButton: typeof import('ui-base')['UButton']
        ULink: typeof import('ui-base')['ULink']
        UDescriptions: typeof import('ui-base')['UDescriptions']
        UTable: typeof import('ui-base')['UTable']
        UTableColumn: typeof import('ui-base')['UTableColumn']
        UPagination: typeof import('ui-base')['UPagination']
    }
}
  

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
