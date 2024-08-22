import { Injectable } from '@angular/core';
import { collectionData, Firestore, getDocs, query, where } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  productCollection=collection(this.firestore,"productos");
  usersCollection=collection(this.firestore,"users");
  PedidosCollection=collection(this.firestore,"pedidos");
  PedidosClienteCollection=collection(this.firestore,"users/sdQbpXTmR4EyyhtCUdbI/Pedidos");


  userLoginOn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  userRol: BehaviorSubject<string>=new BehaviorSubject<string>("cliente"); 

  constructor(private firestore:Firestore ) { }
  
  async login(email:string, password:string):Promise<any>{
    const user = query(this.usersCollection, where("email", "==", email), where("password", "==", password));
    const userData = await getDocs(user);
    console.log("servicio datos") 
    let userDoc;
   userData.forEach((doc) => 
    {
      userDoc = JSON.parse(JSON.stringify(doc.data()))
      localStorage.setItem("userId", JSON.parse(JSON.stringify(doc.id)));
      console.log(JSON.stringify(doc.id))
      console.log(doc.id, " => ", doc.data());
      this.userLoginOn.next(true);
      this.userRol.next(userDoc.rol);
    });
    return userDoc
  }
  get UserLoginOn():Observable<boolean>
  {
    return this.userLoginOn.asObservable()
  }

  get UserRole():Observable<string>
  {
    return this.userRol.asObservable();
  }

  cerrarSesion(){
    this.userLoginOn.next(false);
    this.userRol.next("cliente");
    localStorage.removeItem("userId");
  }

  getProduct(): Observable<any>
  {
    return collectionData(this.productCollection,{
      idfield:'id'
    }) as Observable<any>;
  }
  getPedidos(): Observable<any>
  {
    return collectionData(this.PedidosCollection,{
      idfield:'id'
    }) as Observable<any>;
  }
  getPedidosCliente(): Observable<any>
  {
    return collectionData(this.PedidosClienteCollection,{
      idfield:'id'
    }) as Observable<any>;
  }
  obtenerTask(): Observable<any> 
  { const userId =  localStorage.getItem("userId") ? localStorage.getItem("userId") : "";
    const route= `users/${userId}/tasks`.replace(/"/g, '')
    return collectionData(collection(this.firestore,route),{
      idField:'id'
    }) as Observable<any>;
 
}

pedidosTask(): Observable<any> 
{ const productosId =  localStorage.getItem("productosId") ? localStorage.getItem("productosId") : "";
  const route= `pedidos`.replace(/"/g, '')
  return collectionData(collection(this.firestore,route),{
    idField:'id'
  }) as Observable<any>;

}
pedidosClienteTask(): Observable<any> 
{ const productosId =  localStorage.getItem("productosId") ? localStorage.getItem("productosId") : "";
  const route= `users/sdQbpXTmR4EyyhtCUdbI/Pedidos`.replace(/"/g, '')
  return collectionData(collection(this.firestore,route),{
    idField:'id'
  }) as Observable<any>;

}


}
