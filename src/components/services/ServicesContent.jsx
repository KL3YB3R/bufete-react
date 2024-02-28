import { useParams } from "react-router-dom";
import { Header } from "../Header";
import { URLasesoriaFinanciera, URLasesoriaLaboral, URLauditoriaCuentas } from "../../helpers/asesoriaObjects";
import {
  URLaccionReivindicatoria,
  URLconsorcios,
  URLcontratoCompraVenta,
  URLcontratos,
  URLgestionCobranza,
  URLinstitucionesFamiliares,
  URLinterdictoAmparoRestitutorio,
  URLpoderEspecialGeneral,
  URLprescripcionAdquisitiva,
  URLredaccionesDerechoCivil,
  URLregistroInmmobiliario,
  URLtituloSupletorio,
} from "../../helpers/abogadosObject";
import {
  URLaperturaSucursalExtranjera,
  URLaumentoCapital,
  URLcambioDomicilio,
  URLconstitucionEmpresas,
  URLconstitucionPymes,
  URLempresas,
  URLestatutos,
  URLfusionEmpresas,
  URLplanes,
  URLventaAcciones,
} from "../../helpers/consultoriaObejcts";
import {
  AperturaSucursalExtranjera,
  AuditoriaCostosLaborales,
  AumentoCapital,
  CambioDomicilio,
  ConstitucionEmpresa,
  ConstitucionPyme,
  Empresas,
  Estatutos,
  FusionEmpresas,
  OutsourcingRRHH,
  Planes,
  VentaAcciones,
} from "./subservices/consultoria";
import {
  AccionReivindicatoria,
  ConstitucionConsorcios,
  ContratoCompraVenta,
  Contratos,
  GestionCobranza,
  InstitucionesFamiliares,
  InterdictoAmparo,
  PoderEspecialGeneral,
  PrescripcionAdquisitiva,
  RedaccionesDerechoCivil,
  RegistroInmobiliario,
  TitulosSupletorio,
} from "./subservices/abogados";
import { AsesoriaFinanciera, AsesoriaLaboral, AuditoriaCuentas } from "./subservices/asesoria";

import { Footer } from "../Footer";

export const ServicesContent = ({ color }) => {
  const params = useParams();

  return (
    <>
      <Header color={color} option="services" />
      <main className="p-0 mt-20">
        {/* // ! CONSULTORIA EMPRESARIAL */}
        {params.id === "constitucionEmpresa" ? <ConstitucionEmpresa subservice={URLconstitucionEmpresas} /> : ""}
        {params.id === "constitucionPymes" ? <ConstitucionPyme subservice={URLconstitucionPymes} /> : ""}
        {params.id === "empresas" ? <Empresas subservice={URLempresas} /> : ""}
        {params.id === "planes" ? <Planes subservice={URLplanes} /> : ""}
        {params.id === "estatutos" ? <Estatutos subservice={URLestatutos} /> : ""}
        {params.id === "cambioDomicilio" ? <CambioDomicilio subservice={URLcambioDomicilio} /> : ""}
        {params.id === "aumentoCapital" ? <AumentoCapital subservice={URLaumentoCapital} /> : ""}
        {params.id === "ventaAcciones" ? <VentaAcciones subservice={URLventaAcciones} /> : ""}
        {params.id === "fusionEmpresas" ? <FusionEmpresas subservice={URLfusionEmpresas} /> : ""}
        {params.id === "aperturaSucursalExtranjera" ? (
          <AperturaSucursalExtranjera subservice={URLaperturaSucursalExtranjera} />
        ) : (
          ""
        )}
        {params.id === "outsourcingRRHH" ? <OutsourcingRRHH subservice={URLoutsourcingRRHH} /> : ""}
        {params.id === "auditoriaCostosLaborales" ? (
          <AuditoriaCostosLaborales subservice={URLauditoriaCostosLaborales} />
        ) : (
          ""
        )}

        {/* // ! ABOGADOS EXPERTOS */}
        {params.id === "redaccionesDerechoCivil" ? (
          <RedaccionesDerechoCivil subservice={URLredaccionesDerechoCivil} />
        ) : (
          ""
        )}
        {params.id === "contratos" ? <Contratos subservice={URLcontratos} /> : ""}
        {params.id === "constitucionConsorcios" ? <ConstitucionConsorcios subservice={URLconsorcios} /> : ""}
        {params.id === "tituloSupletorio" ? <TitulosSupletorio subservice={URLtituloSupletorio} /> : ""}
        {params.id === "interdictoAmparoRestitutorio" ? (
          <InterdictoAmparo subservice={URLinterdictoAmparoRestitutorio} />
        ) : (
          ""
        )}
        {params.id === "accionReivindicatoria" ? <AccionReivindicatoria subservice={URLaccionReivindicatoria} /> : ""}
        {params.id === "prescripcionAdquisitiva" ? (
          <PrescripcionAdquisitiva subservice={URLprescripcionAdquisitiva} />
        ) : (
          ""
        )}
        {params.id === "registroInmobiliario" ? <RegistroInmobiliario subservice={URLregistroInmmobiliario} /> : ""}
        {params.id === "contratoCompraventa" ? <ContratoCompraVenta subservice={URLcontratoCompraVenta} /> : ""}
        {params.id === "poderEspecialGeneral" ? <PoderEspecialGeneral subservice={URLpoderEspecialGeneral} /> : ""}
        {params.id === "gestionCobranza" ? <GestionCobranza subservice={URLgestionCobranza} /> : ""}
        {params.id === "institucionesFamiliares" ? (
          <InstitucionesFamiliares subservice={URLinstitucionesFamiliares} />
        ) : (
          ""
        )}

        {/* // ! ASESORIA PROFESIONAL */}
        {params.id === "auditoriaCuentas" ? <AuditoriaCuentas subservice={URLauditoriaCuentas} /> : ""}
        {params.id === "asesoriaLaboral" ? <AsesoriaLaboral subservice={URLasesoriaLaboral} /> : ""}
        {params.id === "asesoriaFinanciera" ? <AsesoriaFinanciera subservice={URLasesoriaFinanciera} /> : ""}
      </main>

      <Footer color={color} />
    </>
  );
};
