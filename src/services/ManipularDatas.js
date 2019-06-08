import firebase from 'react-native-firebase'

const firestore = firebase.firestore()

export function CriarColecaoDeHorariosEmEmpresa(empresaDoc, data, listaDeHorarios = []) {
    
    firestore.collection("empresas").doc(empresaDoc).collection('Horarios').doc(data).set({ListaDeHorarios: listaDeHorarios}).then(()=>{
        console.log("Data Adicionada")
    })
}

export function AdicionarNovoHorarioEmDataDoc(empresaDoc, horario, dataDoc) {
    firestore.collection("empresas").doc(empresaDoc).collection('Horarios').doc(dataDoc).update({
        ListaDeHorarios: firebase.firestore.FieldValue.arrayUnion(horario)
    }).then(() => console.log("data adicionada com sucesso"))
}

export function RemoverHorarioEmDataDoc(empresaDoc, horario, dataDoc) {
    firestore.collection("empresas").doc(empresaDoc).collection('Horarios').doc(dataDoc).update({
        ListaDeHorarios: firebase.firestore.FieldValue.arrayRemove(horario)
    }).then(() => console.log("data removida com sucesso"))
}

export function ObterDatas(empresaDoc) {
    const datas = []
    firestore.collection("empresas").doc(empresaDoc).collection('Horarios').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
           datas.push(doc.id)
           console.log(datas)
        })
    })
    console.log(datas)
    return datas
}