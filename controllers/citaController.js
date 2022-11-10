const Cita = require ('../models/Cita');

// buscar productos
exports.buscarCitas = async (req,res) => {
 try{

    const citas = await Cita.find();
    res.json(citas);

 }catch (error) {
 console.log(error);
 res.status(500).send('hay un error al cargar los datos');
 }

}

// agregar  productos 
exports.agregarCitas = async (req,res) => {
   try{
let cita ;
cita = new Cita(req.body);
await cita.save();
res.send(cita);


   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}

// mostrar producto por id
exports.buscarCita = async (req,res) => {
   try{
      let cita = await Cita.findById(req.params.id);

      if(!cita){
         res.status(404).json({msg: 'no existe el producto'});
      }
res.json(cita);

   }catch (error) {
      console.log(error);
      res.status(500).send('hay un error al cargar los datos');
      }
}

exports.eliminarCitas =  async (req,res) => {
try{
 let cita = await Cita.findById(req.params.id);
 if(!cita) {
   res.status(404).json({msg:'no existe el producto'})
   return
 }
 await Cita.findByIdAndRemove({_id: req.params.id});
 res.json({msg: ' registro eliminado'});

}catch(error){
   console.log(error);
   res.status(500).send(' hay  un  error');
}
}

exports.modificarCita = async (req,res) => {
try{
   const{nombre_paciente, apellidos, cedula, telefono, correo,
   fecha, hora, consultorio, medico} = req.body;
   let cita = await Cita.findById(req.params.id);

   if(!cita){
      res.status(404).json({msg: 'no existe el producto '});      
   }
cita.nombre_paciente = nombre_paciente;
cita.apellidos = apellidos;
cita.cedula = cedula;
cita.telefono = telefono;
cita.correo = correo;
cita.fecha = fecha;
cita.hora = hora;
cita.consultorio = consultorio;
cita.medico = medico;

cita = await Cita.findOneAndUpdate({_id:req.params.id}, cita, {new:true});
res.json(cita);

}catch(error){
   console.log(error);
   res.status(500).send(' hay  un  error');
}
}
