import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpErrorResponse,
} from "@angular/common/http";

import { map, catchError, tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Desarrollo
  private url = "https://binarydigital.com.mx/restAPI/index.php";

  constructor(private _http: HttpClient) { }

  getMenu(idPuesto, idUsuario) {
    return this._http.get(this.url + "/DrSoft/getMenu/" + idPuesto + "/" + idUsuario).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getMenuAll() {
    return this._http.get(this.url + "/DrSoft/getMenuAll/").pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getSubMenu(idPadre) {
    return this._http.get(this.url + "/DrSoft/getSubMenu/" + idPadre).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getMotivoConsulta() {
    return this._http.get(this.url + "/DrSoft/getMotivoConsulta/").pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getAntecedente() {
    return this._http.get(this.url + "/DrSoft/getAntecedente/").pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getRptPacientes() {
    return this._http.get(this.url + "/DrSoft/getRptPaciente/").pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getRptConsulta(idPaciente) {
    return this._http.get(this.url + "/DrSoft/getRptConsulta/" + idPaciente).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getEventosByPaciente(idPaciente) {
    return this._http.get(this.url + "/DrSoft/getEventosByPaciente/" + idPaciente).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getRegistroFotograficoByPaciente(idPaciente) {
    return this._http.get(this.url + "/DrSoft/getRegistroFotograficoByPaciente/" + idPaciente).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getInformesByPaciente(idPaciente) {
    return this._http.get(this.url + "/DrSoft/getInformesByPaciente/" + idPaciente).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getPaciente() {
    return this._http.get(this.url + "/DrSoft/getPaciente/").pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getConsulta(idConsulta) {
    return this._http.get(this.url + "/DrSoft/getConsulta/" + idConsulta).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getSomatometria(idPaciente) {
    return this._http.get(this.url + "/DrSoft/getSomatometria/" + idPaciente).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getAntedecentesDetByIdPaciente(idPaciente) {
    return this._http.get(this.url + "/DrSoft/getAntedecentesDetByIdPaciente/" + idPaciente).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  addEvento(
    idPaciente,
    Titulo,
    Descripcion,
    fotos
    ) {

    let formData = new FormData();

    formData.append('idPaciente', idPaciente);
    formData.append('Titulo', Titulo);
    formData.append('Descripcion', Descripcion);

    // Fotos
    fotos.forEach(element => {
      formData.append('file[]', element);
    });

    return this._http
      .post<any>(this.url + '/DrSoft/addEvento', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );

  }

  addInforme(
    idPaciente,
    Titulo,
    Descripcion,
    fotos
    ) {

    let formData = new FormData();

    formData.append('idPaciente', idPaciente);
    formData.append('Titulo', Titulo);
    formData.append('Descripcion', Descripcion);

    // Fotos
    fotos.forEach(element => {
      formData.append('file[]', element);
    });

    return this._http
      .post<any>(this.url + '/DrSoft/addInforme', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );

  }

  addRegistroFotografico(
    idPaciente,
    Titulo,
    Descripcion,
    fotos
    ) {

    let formData = new FormData();

    formData.append('idPaciente', idPaciente);
    formData.append('Titulo', Titulo);
    formData.append('Descripcion', Descripcion);

    // Fotos
    fotos.forEach(element => {
      formData.append('file[]', element);
    });

    return this._http
      .post<any>(this.url + '/DrSoft/addRegistroFotografico', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );

  }

  addRegistroFotograficoClienteNuevo(
    nombre,
    apaterno,
    amaterno,
    Titulo,
    Descripcion,
    fotos
    ) {

    let formData = new FormData();

    formData.append('nombre', nombre);
    formData.append('apaterno', apaterno);
    formData.append('amaterno', amaterno);
    formData.append('Titulo', Titulo);
    formData.append('Descripcion', Descripcion);

    // Fotos
    fotos.forEach(element => {
      formData.append('file[]', element);
    });

    return this._http
      .post<any>(this.url + '/DrSoft/addRegistroFotograficoClienteNuevo', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );

  }

  addConsultaFoto (
    idConsulta,
    idPaciente,
    file
  ) {
    let formData = new FormData();

    file.forEach(element => {
      formData.append('file[]', element);
    });
    formData.append('idConsulta', idConsulta);
    formData.append('idPaciente', idPaciente);

    return this._http
      .post<any>(this.url + '/DrSoft/addConsultaFoto', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  deleteConsultaFoto(
    idConsultaFoto,
  ) {
    return this._http
      .post<any>(this.url + '/DrSoft/deleteConsultaFoto', {
        idConsultaFoto,
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  addRegistro(
    nombre,
    apaterno,
    amaterno,
    celular,
    correo,
    sexo,
    fechaNacimiento,
    lugarNacimiento,
    direccion,
    municipio,
    correo2,
    rfc,
    direccionFiscal,
    telefono,
    extension,
    numeroFiscal,
    EstadoFiscal,
    municipioFiscal,
    coloniaFiscal,
    cpFiscal,
    usoCFDI,
    menarca,
    dismenorrea,
    eumenorrea,
    ciclo,
    nodias,
    gestas,
    abortos,
    partos,
    cesareas,
    fup,
    fur,
    peso,
    talla,
    temperatura,
    presion,
    frecuenciaCardiaca,
    frecuenciaRespiratoria,
    arrAntecedentes,
    motivo,
    problema,
    subjetivo,
    objetivo,
    analisis,
    plan,
    pronostico,
    receta,
    fotos,
    fotosCount,
    edad,
    diagnostico,
    procedimiento,
    estudios,
  ) {
    let formData = new FormData();

    formData.append('nombre', nombre);
    formData.append('apaterno', apaterno);
    formData.append('amaterno', amaterno);
    formData.append('celular', celular);
    formData.append('correo', correo);
    formData.append('sexo', sexo);
    formData.append('fechaNacimiento', fechaNacimiento);
    formData.append('lugarNacimiento', lugarNacimiento);
    formData.append('direccion', direccion);
    formData.append('municipio', municipio);
    formData.append('correo2', correo2);
    formData.append('rfc', rfc);
    formData.append('direccionFiscal', direccionFiscal);
    formData.append('telefono', telefono);
    formData.append('extension', extension);
    formData.append('edad', edad);
    formData.append('numeroFiscal', numeroFiscal),
    formData.append('estadoFiscal', EstadoFiscal),
    formData.append('municipioFiscal', municipioFiscal),
    formData.append('coloniaFiscal', coloniaFiscal),
    formData.append('cpFiscal', cpFiscal),
    formData.append('usoCFDI', usoCFDI),
    formData.append('diagnostico', diagnostico),
    formData.append('procedimiento', procedimiento),

    // Femenino
    formData.append('menarca', menarca);
    formData.append('dismenorrea', dismenorrea);
    formData.append('eumenorrea', eumenorrea);
    formData.append('ciclo', ciclo);
    formData.append('nodias', nodias);
    formData.append('gestas', gestas);
    formData.append('abortos', abortos);
    formData.append('partos', partos);
    formData.append('cesareas', cesareas);
    formData.append('fup', fup);
    formData.append('fur', fur);

    // Somatometría
    formData.append('peso', peso);
    formData.append('talla', talla);
    formData.append('temperatura', temperatura);
    formData.append('presion', presion);
    formData.append('frecuenciaCardiaca', frecuenciaCardiaca);
    formData.append('frecuenciaRespiratoria', frecuenciaRespiratoria);

    // Antecedentes Familiares
    formData.append('arrAntecedentes', JSON.stringify(arrAntecedentes));

    // Motivos
    formData.append('motivo', motivo);
    formData.append('problema', problema);
    formData.append('subjetivo', subjetivo);
    formData.append('objetivo', objetivo);
    formData.append('analisis', analisis);
    formData.append('plan', plan);
    formData.append('pronostico', pronostico);

    // Receta
    formData.append('receta', receta);
    formData.append('estudios', estudios);

    // Fotos
    fotos.forEach(element => {
      formData.append('file[]', element);
    });

    formData.append('fotosCount', fotosCount);


    return this._http
      .post<any>(this.url + '/DrSoft/addRegistro', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  editRegistro(
    idConsulta,
    idPaciente,
    nombre,
    apaterno,
    amaterno,
    celular,
    correo,
    sexo,
    fechaNacimiento,
    lugarNacimiento,
    direccion,
    municipio,
    correo2,
    rfc,
    direccionFiscal,
    telefono,
    extension,
    numeroFiscal,
    EstadoFiscal,
    municipioFiscal,
    coloniaFiscal,
    cpFiscal,
    usoCFDI,
    menarca,
    dismenorrea,
    eumenorrea,
    ciclo,
    nodias,
    gestas,
    abortos,
    partos,
    cesareas,
    fup,
    fur,
    peso,
    talla,
    temperatura,
    presion,
    frecuenciaCardiaca,
    frecuenciaRespiratoria,
    arrAntecedentes,
    motivo,
    problema,
    subjetivo,
    objetivo,
    analisis,
    plan,
    pronostico,
    receta,
    fotos,
    fotosCount,
    edad,
    diagnostico,
    procedimiento,
    estudios,
  ) {
    let formData = new FormData();

    formData.append('idConsulta', idConsulta);
    formData.append('idPaciente', idPaciente);

    formData.append('nombre', nombre);
    formData.append('apaterno', apaterno);
    formData.append('amaterno', amaterno);
    formData.append('celular', celular);
    formData.append('correo', correo);
    formData.append('sexo', sexo);
    formData.append('fechaNacimiento', fechaNacimiento);
    formData.append('lugarNacimiento', lugarNacimiento);
    formData.append('direccion', direccion);
    formData.append('municipio', municipio);
    formData.append('correo2', correo2);
    formData.append('rfc', rfc);
    formData.append('direccionFiscal', direccionFiscal);
    formData.append('telefono', telefono);
    formData.append('extension', extension);
    formData.append('edad', edad);
    formData.append('numeroFiscal', numeroFiscal),
    formData.append('estadoFiscal', EstadoFiscal),
    formData.append('municipioFiscal', municipioFiscal),
    formData.append('coloniaFiscal', coloniaFiscal),
    formData.append('cpFiscal', cpFiscal),
    formData.append('usoCFDI', usoCFDI),
    formData.append('diagnostico', diagnostico),
    formData.append('procedimiento', procedimiento),

    // Femenino
    formData.append('menarca', menarca);
    formData.append('dismenorrea', dismenorrea);
    formData.append('eumenorrea', eumenorrea);
    formData.append('ciclo', ciclo);
    formData.append('nodias', nodias);
    formData.append('gestas', gestas);
    formData.append('abortos', abortos);
    formData.append('partos', partos);
    formData.append('cesareas', cesareas);
    formData.append('fup', fup);
    formData.append('fur', fur);

    // Somatometría
    formData.append('peso', peso);
    formData.append('talla', talla);
    formData.append('temperatura', temperatura);
    formData.append('presion', presion);
    formData.append('frecuenciaCardiaca', frecuenciaCardiaca);
    formData.append('frecuenciaRespiratoria', frecuenciaRespiratoria);

    // Antecedentes Familiares
    formData.append('arrAntecedentes', JSON.stringify(arrAntecedentes));

    // Motivos
    formData.append('motivo', motivo);
    formData.append('problema', problema);
    formData.append('subjetivo', subjetivo);
    formData.append('objetivo', objetivo);
    formData.append('analisis', analisis);
    formData.append('plan', plan);
    formData.append('pronostico', pronostico);

    // Receta
    formData.append('receta', receta);
    formData.append('estudios', estudios);

    // Fotos
    fotos.forEach(element => {
      formData.append('file[]', element);
    });

    formData.append('fotosCount', fotosCount);


    return this._http
      .post<any>(this.url + '/DrSoft/editRegistro', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  addPacienteConsulta(
    nombre,
    apaterno,
    amaterno,
    celular,
    correo,
    sexo,
    fechaNacimiento,
    lugarNacimiento,
    direccion,
    municipio,
    correo2,
    rfc,
    direccionFiscal,
    telefono,
    extension,
    numeroFiscal,
    EstadoFiscal,
    municipioFiscal,
    coloniaFiscal,
    cpFiscal,
    usoCFDI,
    menarca,
    dismenorrea,
    eumenorrea,
    ciclo,
    nodias,
    gestas,
    abortos,
    partos,
    cesareas,
    fup,
    fur,
    motivo,
    edad,
    diagnostico,
    procedimiento,

  ) {
    let formData = new FormData();

    formData.append('nombre', nombre);
    formData.append('apaterno', apaterno);
    formData.append('amaterno', amaterno);
    formData.append('celular', celular);
    formData.append('correo', correo);
    formData.append('sexo', sexo);
    formData.append('fechaNacimiento', fechaNacimiento);
    formData.append('lugarNacimiento', lugarNacimiento);
    formData.append('direccion', direccion);
    formData.append('municipio', municipio);
    formData.append('correo2', correo2);
    formData.append('rfc', rfc);
    formData.append('direccionFiscal', direccionFiscal);
    formData.append('telefono', telefono);
    formData.append('extension', extension);
    formData.append('edad', edad);
    formData.append('numeroFiscal', numeroFiscal),
    formData.append('estadoFiscal', EstadoFiscal),
    formData.append('municipioFiscal', municipioFiscal),
    formData.append('coloniaFiscal', coloniaFiscal),
    formData.append('cpFiscal', cpFiscal),
    formData.append('usoCFDI', usoCFDI),
    formData.append('diagnostico', diagnostico),
    formData.append('procedimiento', procedimiento),

    // Femenino
    formData.append('menarca', menarca);
    formData.append('dismenorrea', dismenorrea);
    formData.append('eumenorrea', eumenorrea);
    formData.append('ciclo', ciclo);
    formData.append('nodias', nodias);
    formData.append('gestas', gestas);
    formData.append('abortos', abortos);
    formData.append('partos', partos);
    formData.append('cesareas', cesareas);
    formData.append('fup', fup);
    formData.append('fur', fur);

    // Motivos
    formData.append('motivo', motivo);

    return this._http
      .post<any>(this.url + '/DrSoft/addPacienteConsulta', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getConsultasAbiertas() {
    return this._http.get(this.url + "/DrSoft/getConsultasAbiertas/").pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  cerrarConsulta(idConsulta) {

    let formData = new FormData();
    formData.append('idConsulta', idConsulta);

    return this._http
      .post<any>(this.url + '/DrSoft/cerrarConsulta', formData)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getConsultas(fechaInicial, fechaFinal) {
    return this._http.post(this.url + "/DrSoft/getConsultas/", {fechaInicial, fechaFinal}).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }

  getConsultaPdf(idConsulta) {
    return this._http.get(this.url + "/DrSoft/getConsultaPdf/" + idConsulta).pipe(
      map((data) => data),
      catchError((e) => throwError(e))
    );
  }
}
