import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/Service/empleado/empleado.service';
import { Empleado } from 'src/app/models/Empleado/empleado';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent implements OnInit {

  id:number;
  empleado:Empleado;
  constructor(
    private route:ActivatedRoute,
    private empleadoServicio: EmpleadoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado;
    this.empleadoServicio.obtenerEmpleadoporId(this.id).subscribe(
      dato => {
        this.empleado = dato;
      }
    )
  }

}