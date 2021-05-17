import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import traslate from "../../assets/traslate/es.json";
import FormWrapper from "./FormWrapper";
import TheftInfo from "./StepsPastCrime/TheftInfo";
/* import PersonalDetails from "./StepsPastCrime/PersonalDetails";
import TheftDetails from "./StepsPastCrime/TheftDetails";
import Review from './Review';
import Submit from './Submit'; */

import "./Form.css";
import yup from "../../utils/yup";

const TRASLATE = {
  GENDER: ["hombre", "mujer"],
  HEIGHT: ["alto", "mediano", "bajo"],
  CLOTHING: ["formal", "casual", "deportiva", "de trabajo", "semiformal", "escolar", "arreglado", "desprolija"],
  SKIN: ["piel muy clara", "piel clara", "piel morena clara", "piel morena oscura", "piel oscura", "piel muy oscura"],
  PHYSICAL_BUILD: ["delgado", "normal", "corpulento", "obeso", "atletico", "otro"]
}

const schemaRequest = yup.object().shape({
  type: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(["robo", "asesinato", "abuso sexual", "secuestro"] as string[])
      .required(),
  hour: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(["mañana", "mediodia", "tarde", "noche"] as string[])
      .required(),
  date: yup
      .date()
      .min(new Date('01/01/2010'))
      .max(new Date()),
  victim_gender: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.GENDER)
      .optional(),
  victim_dni: yup
      .number()
      .min(100000)
      .max(99999999),
  victim_age: yup
      .number()
      .max(100)
      .min(1),
  victim_height: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.HEIGHT)
      .required(),
  victim_skin: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.SKIN)
      .optional(),
  victim_clothing: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.CLOTHING),
  victim_physical: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.PHYSICAL_BUILD),
  stolen_items: yup
      .mixed()
      .transform((e: string[]) => e.map( i => i.toLowerCase()))
      .notOneOf(["celular", "billetera", "documentacion", "dinero", "auto", "computadora", "notebook", "herramientas", "mochila", "cartera", "llaves", "motocicleta", "ropa", "objetos recien comprados", "alimento", "accesorios", "tarjetas debito/credito", "electrodomesticos", "muebles", "dolares", "joyeria", "objetos de valor personal", "reliquias", "maquinaria", "mascotas", "otros"] as string[])
      .required(),
  stolem_cash: yup
      .number()
      .required(),
  place_description: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(["parque", "calle", "parada de colectivo", "centro comercial", "en propiedad privada", "supermercado", "en el trabajo", "en el estacionamiento", "otros"] as string[]),
  accompaniment: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(["sin compania pero con gente alrededor", "acompaniado pero sin gente alrededor", "acompaniado y con gente al rededor", "sin compania y sin gente alrededor"] as string[]),
  geopoint: yup.object({
      lat: yup.number().min(0).max(90),
      lng: yup.number().min(0).max(180)
  }),
  thief_perfil: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(["violento", "amable", "tranquilo", "agresivo", "cauteloso", "desconfiado", "indiferente", "visiblemente intoxicado", "carismaticos", "no recuerdo"] as string[])
      .required(),
  thief_age: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(["menor de edad", "18-25", "25-35", "35-45", "mas de 50"] as string[])
      .required(),
  thief_height: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.HEIGHT)
      .required(),
  thief_skin: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.SKIN)
      .required(),
  thief_clothin: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.CLOTHING)
      .required(),
  thief_physical: yup
      .mixed()
      .transform((e: string) => e.toLowerCase())
      .oneOf(TRASLATE.PHYSICAL_BUILD),
  complaint: yup.boolean(),
  arrested: yup.boolean()
});

type FormSchema = yup.InferType<typeof schemaRequest>;

export default function PastCrime() {

  const [page, set_page] = useState<number>(0);

  const [ form, set_form ] = useState({});

  const [ errors, set_errors ] = useState({});

  useEffect(()=> console.log(form), [form])

  const onChange = (name: string, newValue:string | number | boolean) => set_form({ ...form, [name]: newValue })

  return <FormWrapper
    title={traslate["FORM"]["TITLE-PASTCRIME"]}
    subtitle={traslate["FORM"]["SUBTITLE"]}
    loading={20}
  >
    <TheftInfo form={form} onChange={onChange} />
  </FormWrapper>
}

/*
    case "address":
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
        >
          <PersonalDetails />
        </FormWrapper>
      );
    case "contact":
      return (
        <FormWrapper
          title={traslate["FORM"]["TITLE-PASTCRIME"]}
          subtitle={traslate["FORM"]["SUBTITLE"]}
        >
          <TheftDetails  />
        </FormWrapper>
      );
    case "review":
      return <Review />;
    case "submit":
      return <Submit />;  */
