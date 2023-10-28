import {createI18n} from "vue-i18n"

import zh from "./zh.js"
import us from "./us.js"
import zh_hk from "./zh_hk.js"

const i18n = createI18n({
    locale:'zh',
    messages:{
        zh,
        us,
        zh_hk
    }
})

export default i18n