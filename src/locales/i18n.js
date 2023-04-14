import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",

  messages: {
    en: {
      username: "User",
      clickme: "Click me!",
      code: "Code",
      validate: "Validate",
      name: "Name",
      category: "Category",
      dateAdded: "Date Added",
      quantity: "Quantity",
      description: "Description",
      digitalVersion: "Digital Version",
      status: "Status",
      active: "Active",
      suspended: "Suspended",
      inactive: "Inactive",
      save: "Save",
      cancel: "Cancel",
      addTutorial: "Add Tutorial",
      library: "Library",
    },

    es: {
      username: "Usuario",
      clickme: "Haz clic!",
      code: "Codigo",
      validate: "Validar",
      name: "Nombre",
      category: "Categoria",
      dateAdded: "Fecha Agregada",
      quantity: "Cantidad",
      description: "Descripcion",
      digitalVersion: "Version Digital",
      status: "Estado",
      active: "Activo",
      suspended: "Suspendido",
      inactive: "Inactivo",
      save: "Guardar",
      cancel: "Cancelar",
      addTutorial: "Agregar Tutorial",
      library: "Libreria",
    },

    fr: {
      username: "Utilisateur",
      clickme: "Cliquez sur moi!",
      code: "Code",
      validate: "Valider",
      name: "Nom",
      category: "Categorie",
      dateAdded: "Date Ajoutee",
      quantity: "Quantite",
      description: "Description",
      digitalVersion: "Version Numerique",
      status: "Statut",
      active: "Actif",
      suspended: "Suspendu",
      inactive: "Inactif",
      save: "Enregistrer",
      cancel: "Annuler",
      addTutorial: "Ajouter Tutoriel",
      library: "Bibliotheque",
    },

    ja: {
      username: "ユーザー名",
      clickme: "クリックしてください！",
      code: "コード",
      validate: "検証する",
      name: "名前",
      category: "カテゴリー",
      dateAdded: "追加日",
      quantity: "数量",
      description: "説明",
      digitalVersion: "デジタルバージョン",
      status: "状態",
      active: "アクティブ",
      suspended: "中止",
      inactive: "非アクティブ",
      save: "セーブ",
      cancel: "キャンセル",
      addTutorial: "チュートリアルを追加",
      library: "図書館",
    },
  },

  // something vue-i18n options here ...
});

export default i18n;