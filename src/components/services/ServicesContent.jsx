import { useParams } from "react-router-dom";
import { Header } from "../header/Header";
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
  URLaperturaSucursalExtranjera,
  URLauditoriaCostosLaborales,
  URLaumentoCapital,
  URLcambioDomicilio,
  URLconstitucionEmpresas,
  URLconstitucionPymes,
  URLcontratos,
  URLempresas,
  URLestatutos,
  URLfusionEmpresas,
  URLoutsourcingRRHH,
  URLplanes,
  URLredaccionesDerechoCivil,
  URLventaAcciones,
} from "../../helpers/subservicesObjects";
import { Contratos, RedaccionesDerechoCivil } from "./subservices/abogados";

export const ServicesContent = ({ color }) => {
  const params = useParams();

  return (
    <>
      <Header color={color} />
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
    </>
  );
};
