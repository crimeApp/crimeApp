/* stolen_items: yup
      .mixed()
      .transform((e) => e.map( i => i.toLowerCase()))
      .notOneOf(["celular", "billetera", "documentacion", 
      "dinero", "auto", "computadora", "notebook", "herramientas", 
      "mochila", "cartera", "llaves", "motocicleta", "ropa", 
      "objetos recien comprados", "alimento", "accesorios", 
      "tarjetas debito/credito", "electrodomesticos", "muebles", 
      "dolares", "joyeria", "objetos de valor personal", "reliquias", 
      "maquinaria", "mascotas", "otros"])
      .required(),
  stolem_cash: yup
      .number()
      .required(), */