import { typesModal, typesProductos } from '../types/types'

export const selectedModal = ( codigo: any ) => {
  console.log(codigo);
  return {
      type: typesModal.selected,
      payload: codigo
  }
}

export const selectedEdit = ( productEdit:any ) => {
  return {
    type: typesProductos.edit,
    payload: productEdit
  }
}