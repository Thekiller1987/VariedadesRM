import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import jsPDF from 'jspdf';
import Chart from 'chart.js/auto';
import '../styles/App.css';
import Footer from '../components/Footer';
import html2canvas from 'html2canvas';
import emailjs from "emailjs-com";
import * as XLSX from "xlsx";
import { FaFileExcel } from "react-icons/fa6";
function Estadisticas({ Rol }) {
  const [TasaVentasPorMes, setTasaVentasPorMes] = useState([]);
  const TasaVentasPorMesCharTemptRef = useRef(null);


  const [totalVentasPorAnio, setTotalVentasPorAnio] = useState([]);
  const totalVentasPorAnioChartRef = useRef(null); // Ref for chart instance

  const [TotalVentasPorCliente, setTotalVentasPorCliente] = useState([]);
  const TotalVentasPorClienteChartRef = useRef(null);



  const [promedioVentasPorProducto, setPromedioVentasPorProducto] = useState([]);
  const promedioVentasPorProductoChartRef = useRef(null); // Ref for chart instance


  const [numeroVentasPorProducto, setNumeroVentasPorProducto] = useState([]);
  const numeroVentasPorProductoChartRef = useRef(null); // Ref for chart instance

  const [totalVentasPorCategoria, setTotalVentasPorCategoria] = useState([]);
  const totalVentasPorCategoriaChartRef = useRef(null); // Ref for chart instance




  const [productos, setProductos] = useState([]);
  const [ventasAnio, setVentasAnio] = useState([]);
  const [ventasMes, setVentasMes] = useState([]);
  const [ventasDia, setVentasDia] = useState([]);
  const [myChart, setMyChart] = useState(null);
  const [ventasAnioChart, setVentasAnioChart] = useState(null);
  const [ventasMesChart, setVentasMesChart] = useState(null);
  const [ventasDiaChart, setVentasDiaChart] = useState(null);






  const exportarAExcel = () => {
    // Convertir los datos JSON a una hoja de trabajo de Excel
    const worksheet = XLSX.utils.json_to_sheet(TasaVentasPorMes);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "TasaVentasPorMes");

    // Generar y descargar el archivo Excel
    XLSX.writeFile(workbook, "TasaVentasPorMes+.xlsx");
  };






const exportarAExcel2 = () => {
  // Convertir los datos JSON a una hoja de trabajo de Excel
  const worksheet = XLSX.utils.json_to_sheet(TotalVentasPorCliente);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "TotalVentasPorCliente");

  // Generar y descargar el archivo Excel
  XLSX.writeFile(workbook, "TotalVentasPorCliente+.xlsx");
  };



const exportarAExcel3 = () => {
  // Convertir los datos JSON a una hoja de trabajo de Excel
  const worksheet = XLSX.utils.json_to_sheet(promedioVentasPorProducto);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "promedioVentasPorProducto");

  // Generar y descargar el archivo Excel
  XLSX.writeFile(workbook, "promedioVentasPorProducto+.xlsx");
  };



const exportarAExcel4 = () => {
  // Convertir los datos JSON a una hoja de trabajo de Excel
  const worksheet = XLSX.utils.json_to_sheet(numeroVentasPorProducto);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "numeroVentasPorProducto");

  // Generar y descargar el archivo Excel
  XLSX.writeFile(workbook, "numeroVentasPorProducto+.xlsx");
  };



const exportarAExcel5 = () => {
  // Convertir los datos JSON a una hoja de trabajo de Excel
  const worksheet = XLSX.utils.json_to_sheet(totalVentasPorCategoria);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "totalVentasPorCategoria");

  // Generar y descargar el archivo Excel
  XLSX.writeFile(workbook, "totalVentasPorCategoria+.xlsx");
  };


const exportarAExcel6 = () => {
  // Convertir los datos JSON a una hoja de trabajo de Excel
  const worksheet = XLSX.utils.json_to_sheet(TotalVentasPorCliente);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "TotalVentasPorCliente");

  // Generar y descargar el archivo Excel
  XLSX.writeFile(workbook, "TotalVentasPorCliente+.xlsx");
  };

















  const formatearTotaVentcategoria = (Totalvenprocat) => {
    return Totalvenprocat
      .map(Totalvenprocat => {
        return `Nombre producto: ${Totalvenprocat.Categoria}\nTotal ventas: ${Totalvenprocat.TotalVentas}`;
      })
      .join("\n\n");
  };
  

  const enviarCorreo8 = () => {
    // Formateo de datos
    const VentaproFormateadosVentaCateoria = formatearTotaVentcategoria(
      totalVentasPorCategoria
    );

    // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: "waskar",
      user_email: "yg97507@gmail.com",
      message: VentaproFormateadosVentaCateoria,
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send("service_b6woc0e", "template_xbxiiiu", data, "5Hv8g7a6xh-SPeMtg")
      .then((response) => {
        alert("Correo enviado.");
        console.log("Correo enviado.", response);
      })
      .catch((error) => {
        alert("Error al enviar el correo.");
        console.error("Error al enviar el correo:", error);
      });
  };






























  const formatearVentcantec = (venprocat) => {
    return venprocat
      .map(venpro => {
        return `Nombre producto: ${venpro.Nombre_Producto}\nNumero venta: ${venpro.NumeroVentas}`;
      })
      .join("\n\n");
  };
  

  const enviarCorreo7 = () => {
    // Formateo de datos
    const VentaproFormateadosVenta = formatearVentcantec(
      numeroVentasPorProducto
    );

    // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: "waskar",
      user_email: "yg97507@gmail.com",
      message: VentaproFormateadosVenta,
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send("service_b6woc0e", "template_xbxiiiu", data, "5Hv8g7a6xh-SPeMtg")
      .then((response) => {
        alert("Correo enviado.");
        console.log("Correo enviado.", response);
      })
      .catch((error) => {
        alert("Error al enviar el correo.");
        console.error("Error al enviar el correo:", error);
      });
  };









































  const formatearventaporproducto = (venpro) => {
    return venpro
      .map(venpro => {
        return `Nombre producto: ${venpro.Nombre_Producto}\nNumero venta: ${venpro.NumeroVentas}`;
      })
      .join("\n\n");
  };
  

  const enviarCorreo6 = () => {
    // Formateo de datos
    const VentaproFormateados = formatearventaporproducto(
      numeroVentasPorProducto
    );

    // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: "waskar",
      user_email: "yg97507@gmail.com",
      message: VentaproFormateados,
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send("service_b6woc0e", "template_xbxiiiu", data, "5Hv8g7a6xh-SPeMtg")
      .then((response) => {
        alert("Correo enviado.");
        console.log("Correo enviado.", response);
      })
      .catch((error) => {
        alert("Error al enviar el correo.");
        console.error("Error al enviar el correo:", error);
      });
  };





































  const formatearPromeventa = (promvent) => {
    return promvent
      .map(promvent => {
        return `Nombre producto: ${promvent.Nombre_Producto}\nPromedio: ${promvent.PromedioVentas}`;
      })
      .join("\n\n");
  };
  

  const enviarCorreo5 = () => {
    // Formateo de datos
    const promedioventaFormateados = formatearPromeventa(
      promedioVentasPorProducto
    );

    // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: "waskar",
      user_email: "yg97507@gmail.com",
      message: promedioventaFormateados,
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send("service_b6woc0e", "template_xbxiiiu", data, "5Hv8g7a6xh-SPeMtg")
      .then((response) => {
        alert("Correo enviado.");
        console.log("Correo enviado.", response);
      })
      .catch((error) => {
        alert("Error al enviar el correo.");
        console.error("Error al enviar el correo:", error);
      });
  };




















//-----------------------------------------------------------------------------------------------------




  const formatearTotalventaanio = (Totaventanio) => {
    return Totaventanio
      .map(Totaventanio => {
        return `Año: ${Totaventanio.Anio}\nTotalVentas: ${Totaventanio.TotalVentas}`;
      })
      .join("\n\n");
  };
  

  const enviarCorreo4 = () => {
    // Formateo de datos
    const totalventaanioFormateados = formatearTotalventaanio(
      totalVentasPorAnio
    );

    // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: "waskar",
      user_email: "yg97507@gmail.com",
      message: totalventaanioFormateados,
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send("service_b6woc0e", "template_xbxiiiu", data, "5Hv8g7a6xh-SPeMtg")
      .then((response) => {
        alert("Correo enviado.");
        console.log("Correo enviado.", response);
      })
      .catch((error) => {
        alert("Error al enviar el correo.");
        console.error("Error al enviar el correo:", error);
      });
  };

























//---------------------------------------------------------------------------------------------


  const formatearTotalventaCliente = (Totaventcliente) => {
    return Totaventcliente
      .map(Totaventcliente => {
        return `Nombre Completo: ${Totaventcliente.Nombre_Completo}\nTotalVentas: ${Totaventcliente.TotalVentas}`;
      })
      .join("\n\n");
  };
  

  const enviarCorreo3 = () => {
    // Formateo de datos
    const totalventaFormateados = formatearTotalventaCliente(
      TotalVentasPorCliente
    );

    // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: "waskar",
      user_email: "yg97507@gmail.com",
      message: totalventaFormateados,
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send("service_b6woc0e", "template_xbxiiiu", data, "5Hv8g7a6xh-SPeMtg")
      .then((response) => {
        alert("Correo enviado.");
        console.log("Correo enviado.", response);
      })
      .catch((error) => {
        alert("Error al enviar el correo.");
        console.error("Error al enviar el correo:", error);
      });
  };



















//----------------------------------------------------------------------------

  const formatearTasaventame = (tasventmes) => {
    return tasventmes
      .map(tasventmes => {
        return `Número de la venta: ${tasventmes.NumeroTotalVentas}\nTasa de ventas: ${tasventmes.TasaVentasPorMes}`;
      })
      .join("\n\n");
  };
  

  const enviarCorreo2 = () => {
    // Formateo de datos
    const tasaFormateados = formatearTasaventame(
      TasaVentasPorMes
    );

    // Datos de ejemplo (reemplaza con tus datos reales)
    const data = {
      to_name: "waskar",
      user_email: "yg97507@gmail.com",
      message: tasaFormateados,
    };

    // Envía el correo utilizando EmailJS
    emailjs
      .send("service_b6woc0e", "template_xbxiiiu", data, "5Hv8g7a6xh-SPeMtg")
      .then((response) => {
        alert("Correo enviado.");
        console.log("Correo enviado.", response);
      })
      .catch((error) => {
        alert("Error al enviar el correo.");
        console.error("Error al enviar el correo:", error);
      });
  };






  useEffect(() => {
    fetch('http://localhost:5000/crud/readproducto')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error('Error al obtener los productos:', error));
  }, []);

  useEffect(() => {
    if (productos.length > 0) {
      const ctx = document.getElementById('productosChart');

      if (myChart !== null) {
        myChart.destroy();
      }

      const nombresProductos = productos.map((producto) => producto.nombreProducto);
      const stocks = productos.map((producto) => producto.Stock);

      const almacen = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: nombresProductos,
          datasets: [{
            label: 'Cantidad disponible',
            data: stocks,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setMyChart(almacen);
    }
  }, [productos]);

  const fetchVentasTotalesPorAnio = () => {
    fetch('http://localhost:5000/ventastotalesporanio')
      .then(response => response.json())
      .then(data => {
        setVentasAnio(data);
      })
      .catch(error => console.error('Error al obtener ventas totales por año:', error));
  };

  const fetchVentasTotalesPorMes = (anio) => {
    fetch(`http://localhost:5000/ventastotalespormes/${anio}`)
      .then(response => response.json())
      .then(data => {
        setVentasMes(data);
      })
      .catch(error => console.error(`Error al obtener ventas totales por mes en el año ${anio}:`, error));
  };

  const fetchVentasTotalesPorDia = (anio, mes) => {
    fetch(`http://localhost:5000/ventastotalespordia/${anio}/${mes}`)
      .then(response => response.json())
      .then(data => {
        setVentasDia(data);
      })
      .catch(error => console.error(`Error al obtener ventas totales por día en ${mes}/${anio}:`, error));
  };

  useEffect(() => {
    fetchVentasTotalesPorAnio();
    fetchVentasTotalesPorMes(2024);
    fetchVentasTotalesPorDia(2024, 5);
  }, []);

  useEffect(() => {
    if (ventasAnio.length > 0) {
      const ctx = document.getElementById('ventasAnioChart');

      if (ventasAnioChart !== null) {
        ventasAnioChart.destroy();
      }

      const labels = ventasAnio.map(item => item.Anio);
      const data = ventasAnio.map(item => item.Ventas_Totales);

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ventas Totales por Año',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasAnioChart(chart);
    }
  }, [ventasAnio]);

  useEffect(() => {
    if (ventasMes.length > 0) {
      const ctx = document.getElementById('ventasMesChart');

      if (ventasMesChart !== null) {
        ventasMesChart.destroy();
      }

      const labels = ventasMes.map(item => item.Mes);
      const data = ventasMes.map(item => item.Ventas_Totales);

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ventas Totales por Mes',
            data: data,
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasMesChart(chart);
    }
  }, [ventasMes]);

  useEffect(() => {
    if (ventasDia.length > 0) {
      const ctx = document.getElementById('ventasDiaChart');

      if (ventasDiaChart !== null) {
        ventasDiaChart.destroy();
      }

      const labels = ventasDia.map(item => item.Dia);
      const data = ventasDia.map(item => item.Ventas_Totales);

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ventas Totales por Día',
            data: data,
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setVentasDiaChart(chart);
    }
  }, [ventasDia]);

  const generarReporteAlmacen = () => {
    fetch('http://localhost:5000/crud/readproducto')
      .then((response) => response.json())
      .then((productos) => {
        const doc = new jsPDF();
        let y = 25;

        doc.setTextColor(128, 0, 128);
        doc.text("Reporte de Estado de Almacén", 20, 10);
        doc.setTextColor(0, 0, 0);

        productos.forEach((producto) => {
          doc.text(`Nombre: ${producto.nombreProducto}`, 20, y);
          doc.text(`Cantidad: ${producto.Stock}`, 20, y + 10);

          y += 30;
          if (y >= 280) {
            doc.addPage();
            y = 20;
          }
        });

        doc.save("reporte_almacen.pdf");
      })
      .catch((error) => console.error('Error al obtener los productos:', error));
  };

  const generarReporteAlmacenImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('productosChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text("Reporte de Estado de Almacén", 67, 10);

      const pageWidth = pdf.internal.pageSize.width;
      const imgWidth = 100;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const xPos = (pageWidth - imgWidth) / 2;

      pdf.addImage(imgData, xPos, 20, imgWidth, imgHeight);

      pdf.save("reporte_almacen_con_grafico.pdf");
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };


  useEffect(() => {
    fetch("http://localhost:5000/cruddb2/TasaVentasPorMes")
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos para TasaVentasPorMes:', data);
        setTasaVentasPorMes(data);
      })
      .catch((error) =>
        console.error("Error al obtener la tasa de ventas mensual:", error)
      );
  }, []);


  useEffect(() => {
    if (TasaVentasPorMes.length > 0) {
      const ctx = document.getElementById("tasaVentasPorMesChart").getContext('2d');

      if (TasaVentasPorMesCharTemptRef.current !== null) {
        TasaVentasPorMesCharTemptRef.current.destroy();
      }

      const Mes = TasaVentasPorMes.map((item) => item.Mes);
      const TasaVentas = TasaVentasPorMes.map((item) => item.TasaVentasPorMes);

      console.log('Datos para el gráfico:', { Mes, TasaVentas }); // Añadir log aquí

      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: Mes,
          datasets: [
            {
              label: "Tasa de venta por mes",
              data: TasaVentas,
              backgroundColor: "rgba(75, 192, 192, 0.5)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      TasaVentasPorMesCharTemptRef.current = chart;
    }
  }, [TasaVentasPorMes]);


  const generarReporteTasaVentasMes = () => {
    fetch("http://localhost:5000/cruddb2/TasaVentasPorMes")
      .then((response) => response.json())
      .then((tasaVentasMensual) => {
        const doc = new jsPDF();
        let y = 15;

        doc.text("Reporte de Tasa de Ventas Mensual", 20, 10);

        tasaVentasMensual.forEach((item) => {
          doc.text(`Mes: ${item.Mes}`, 20, y);
          doc.text(
            `Tasa de Ventas Mensual (%): ${item.TasaVentasPorMes.toFixed(2)}`,
            20,
            y + 10
          );

          y += 20;
          if (y >= 280) {
            doc.addPage();
            y = 15;
          }
        });

        doc.save("reporte_tasa_ventas_mensual.pdf");
      })
      .catch((error) =>
        console.error("Error al obtener los datos de tasa de ventas mensual:", error)
      );
  };

  const generarReporteTasaVentasMesImg = async () => {
    try {
      const canvas = await html2canvas(
        document.getElementById("tasaVentasPorMesChart")
      );
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      pdf.text("Reporte de Tasa de Ventas Mensual", 20, 10);

      const pageWidth = pdf.internal.pageSize.width;
      const imgWidth = 100;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const xPos = (pageWidth - imgWidth) / 2;

      pdf.addImage(imgData, xPos, 20, imgWidth, imgHeight);

      pdf.save("reporte_tasa_ventas_mensual_con_grafico.pdf");
    } catch (error) {
      console.error("Error al generar el reporte con imagen:", error);
    }
  };



  useEffect(() => {
    fetch('http://localhost:5000/cruddb2/TotalVentasPorCliente')
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos para TotalVentasPorCliente:', data);
        setTotalVentasPorCliente(data);
      })
      .catch((error) =>
        console.error('Error al obtener los datos de TotalVentasPorCliente:', error)
      );
  }, []);

  useEffect(() => {
    if (TotalVentasPorCliente.length > 0) {
      const ctx = document.getElementById('TotalVentasPorClienteChart').getContext('2d');

      if (TotalVentasPorClienteChartRef.current !== null) {
        TotalVentasPorClienteChartRef.current.destroy();
      }

      const Nombre_Completo = TotalVentasPorCliente.map((item) => item.Nombre_Completo);
      const TotalVentas = TotalVentasPorCliente.map((item) => item.TotalVentas);

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Nombre_Completo,
          datasets: [
            {
              label: 'Total Ventas por Cliente',
              data: TotalVentas,
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      TotalVentasPorClienteChartRef.current = chart;
    }
  }, [TotalVentasPorCliente]);




  const generarReporteTotalVentaPorCliente = () => {
    fetch("http://localhost:5000/cruddb2/TotalVentasPorCliente")
      .then((response) => response.json())
      .then((totalVentasPorCliente) => {
        const doc = new jsPDF();
        let y = 15;

        doc.text("Reporte de Total de Ventas por Cliente", 20, 10);

        totalVentasPorCliente.forEach((item) => {
          doc.text(`Cliente: ${item.Nombre_Completo}`, 20, y);
          doc.text(
            `Total de Ventas: ${item.TotalVentas.toFixed(2)}`,
            20,
            y + 10
          );

          y += 20;
          if (y >= 280) {
            doc.addPage();
            y = 15;
          }
        });

        doc.save("reporte_total_ventas_por_cliente.pdf");
      })
      .catch((error) =>
        console.error("Error al obtener los datos de total de ventas por cliente:", error)
      );
  };

  const generarReporteTotalVentaPorClienteImg = async () => {
    try {
      const canvas = await html2canvas(
        document.getElementById("TotalVentasPorClienteChart")
      );
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL("image/png");
      pdf.text("Reporte de Total de Ventas por Cliente", 20, 10);

      const pageWidth = pdf.internal.pageSize.width;
      const imgWidth = 100;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const xPos = (pageWidth - imgWidth) / 2;

      pdf.addImage(imgData, xPos, 20, imgWidth, imgHeight);

      pdf.save("reporte_total_ventas_por_cliente_con_grafico.pdf");
    } catch (error) {
      console.error("Error al generar el reporte con imagen:", error);
    }
  };


  useEffect(() => {
    fetch('http://localhost:5000/cruddb2/TotalVentasPorAnio')
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos para TotalVentasPorAnio:', data);
        setTotalVentasPorAnio(data);
      })
      .catch((error) =>
        console.error('Error al obtener los datos de TotalVentasPorAnio:', error)
      );
  }, []);

  useEffect(() => {
    if (totalVentasPorAnio.length > 0) {
      const ctx = document.getElementById('TotalVentasPorAnioChart');

      // Ensure canvas and context are available
      if (ctx) {
        // Destroy existing chart if it exists
        if (totalVentasPorAnioChartRef.current) {
          totalVentasPorAnioChartRef.current.destroy();
        }

        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: totalVentasPorAnio.map((item) => item.Anio),
            datasets: [
              {
                label: 'Total Ventas por Año',
                data: totalVentasPorAnio.map((item) => item.TotalVentas),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Store chart instance in ref for later destruction
        totalVentasPorAnioChartRef.current = chart;
      }
    }
  }, [totalVentasPorAnio]);

  const generarReporteTotalVentaPorAnio = () => {
    fetch('http://localhost:5000/cruddb2/TotalVentasPorAnio')
      .then((response) => response.json())
      .then((totalVentasPorAnio) => {
        const doc = new jsPDF();
        let y = 15;

        doc.text('Reporte de Total de Ventas por Año', 20, 10);

        totalVentasPorAnio.forEach((item) => {
          doc.text(`Año: ${item.Anio}`, 20, y);
          doc.text(`Total de Ventas: ${item.TotalVentas.toFixed(2)}`, 20, y + 10);

          y += 20;
          if (y >= 280) {
            doc.addPage();
            y = 15;
          }
        });

        doc.save('reporte_total_ventas_por_anio.pdf');
      })
      .catch((error) =>
        console.error('Error al obtener los datos de total de ventas por año:', error)
      );
  };

  const generarReporteTotalVentaPorAnioImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('TotalVentasPorAnioChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text('Reporte de Total de Ventas por Año', 20, 10);

      const pageWidth = pdf.internal.pageSize.width;
      const imgWidth = 100;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const xPos = (pageWidth - imgWidth) / 2;

      pdf.addImage(imgData, xPos, 20, imgWidth, imgHeight);

      pdf.save('reporte_total_ventas_por_anio_con_grafico.pdf');
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };

  //----------------------------------------------------------------------------------------












  useEffect(() => {
    fetch('http://localhost:5000/cruddb2/PromedioVentasPorProducto')
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos para PromedioVentasPorProducto:', data);
        setPromedioVentasPorProducto(data);
      })
      .catch((error) =>
        console.error('Error al obtener los datos de PromedioVentasPorProducto:', error)
      );
  }, []);

  useEffect(() => {
    if (promedioVentasPorProducto.length > 0) {
      const ctx = document.getElementById('PromedioVentasPorProductoChart');

      // Ensure canvas and context are available
      if (ctx) {
        // Destroy existing chart if it exists
        if (promedioVentasPorProductoChartRef.current) {
          promedioVentasPorProductoChartRef.current.destroy();
        }

        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: promedioVentasPorProducto.map((item) => item.Nombre_Producto),
            datasets: [
              {
                label: 'Promedio de Ventas por Producto',
                data: promedioVentasPorProducto.map((item) => item.PromedioVentas.toFixed(2)),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Store chart instance in ref for later destruction
        promedioVentasPorProductoChartRef.current = chart;
      }
    }
  }, [promedioVentasPorProducto]);

  const generarReportePromedioVentasPorProducto = () => {
    fetch('http://localhost:5000/cruddb2/PromedioVentasPorProducto')
      .then((response) => response.json())
      .then((promedioVentasPorProducto) => {
        const doc = new jsPDF();
        let y = 15;

        doc.text('Reporte de Promedio de Ventas por Producto', 20, 10);

        promedioVentasPorProducto.forEach((item) => {
          doc.text(`Producto: ${item.Nombre_Producto}`, 20, y);
          doc.text(`Promedio de Ventas: ${item.PromedioVentas.toFixed(2)}`, 20, y + 10);

          y += 20;
          if (y >= 280) {
            doc.addPage();
            y = 15;
          }
        });

        doc.save('reporte_promedio_ventas_por_producto.pdf');
      })
      .catch((error) =>
        console.error('Error al obtener los datos de promedio de ventas por producto:', error)
      );
  };

  const generarReportePromedioVentasPorProductoImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('PromedioVentasPorProductoChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text('Reporte de Promedio de Ventas por Producto', 20, 10);

      const pageWidth = pdf.internal.pageSize.width;
      const imgWidth = 100;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const xPos = (pageWidth - imgWidth) / 2;

      pdf.addImage(imgData, xPos, 20, imgWidth, imgHeight);

      pdf.save('reporte_promedio_ventas_por_producto_con_grafico.pdf');
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };


  //----------------------------------------------------------------------------------------




  useEffect(() => {
    fetch('http://localhost:5000/cruddb2/NumeroVentasPorProducto')
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos para NumeroVentasPorProducto:', data);
        setNumeroVentasPorProducto(data);
      })
      .catch((error) =>
        console.error('Error al obtener los datos de NumeroVentasPorProducto:', error)
      );
  }, []);

  useEffect(() => {
    if (numeroVentasPorProducto.length > 0) {
      const ctx = document.getElementById('NumeroVentasPorProductoChart');

      // Ensure canvas and context are available
      if (ctx) {
        // Destroy existing chart if it exists
        if (numeroVentasPorProductoChartRef.current) {
          numeroVentasPorProductoChartRef.current.destroy();
        }

        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: numeroVentasPorProducto.map((item) => item.Nombre_Producto),
            datasets: [
              {
                label: 'Número de Ventas por Producto',
                data: numeroVentasPorProducto.map((item) => item.NumeroVentas),
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Store chart instance in ref for later destruction
        numeroVentasPorProductoChartRef.current = chart;
      }
    }
  }, [numeroVentasPorProducto]);

  const generarReporteNumeroVentasPorProducto = () => {
    fetch('http://localhost:5000/cruddb2/NumeroVentasPorProducto')
      .then((response) => response.json())
      .then((numeroVentasPorProducto) => {
        const doc = new jsPDF();
        let y = 15;

        doc.text('Reporte de Número de Ventas por Producto', 20, 10);

        numeroVentasPorProducto.forEach((item) => {
          doc.text(`Producto: ${item.Nombre_Producto}`, 20, y);
          doc.text(`Número de Ventas: ${item.NumeroVentas}`, 20, y + 10);

          y += 20;
          if (y >= 280) {
            doc.addPage();
            y = 15;
          }
        });

        doc.save('reporte_numero_ventas_por_producto.pdf');
      })
      .catch((error) =>
        console.error('Error al obtener los datos de número de ventas por producto:', error)
      );
  };

  const generarReporteNumeroVentasPorProductoImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('NumeroVentasPorProductoChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text('Reporte de Número de Ventas por Producto', 20, 10);

      const pageWidth = pdf.internal.pageSize.width;
      const imgWidth = 100;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const xPos = (pageWidth - imgWidth) / 2;

      pdf.addImage(imgData, xPos, 20, imgWidth, imgHeight);

      pdf.save('reporte_numero_ventas_por_producto_con_grafico.pdf');
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };
  //----------------------------------------------------------------------------------------

  useEffect(() => {
    fetch('http://localhost:5000/cruddb2/TotalVentasPorCategoria')
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos recibidos para TotalVentasPorCategoria:', data);
        setTotalVentasPorCategoria(data);
      })
      .catch((error) =>
        console.error('Error al obtener los datos de TotalVentasPorCategoria:', error)
      );
  }, []);

  useEffect(() => {
    if (totalVentasPorCategoria.length > 0) {
      const ctx = document.getElementById('TotalVentasPorCategoriaChart');

      // Ensure canvas and context are available
      if (ctx) {
        // Destroy existing chart if it exists
        if (totalVentasPorCategoriaChartRef.current) {
          totalVentasPorCategoriaChartRef.current.destroy();
        }

        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: totalVentasPorCategoria.map((item) => item.Categoria),
            datasets: [
              {
                label: 'Total Ventas por Categoría',
                data: totalVentasPorCategoria.map((item) => item.TotalVentas),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        // Store chart instance in ref for later destruction
        totalVentasPorCategoriaChartRef.current = chart;
      }
    }
  }, [totalVentasPorCategoria]);

  const generarReporteTotalVentasPorCategoria = () => {
    fetch('http://localhost:5000/cruddb2/TotalVentasPorCategoria')
      .then((response) => response.json())
      .then((totalVentasPorCategoria) => {
        const doc = new jsPDF();
        let y = 15;

        doc.text('Reporte de Total de Ventas por Categoría de Producto', 20, 10);

        totalVentasPorCategoria.forEach((item) => {
          doc.text(`Categoría: ${item.Categoria}`, 20, y);
          doc.text(`Total de Ventas: ${item.TotalVentas.toFixed(2)}`, 20, y + 10);

          y += 20;
          if (y >= 280) {
            doc.addPage();
            y = 15;
          }
        });

        doc.save('reporte_total_ventas_por_categoria.pdf');
      })
      .catch((error) =>
        console.error('Error al obtener los datos de total de ventas por categoría:', error)
      );
  };

  const generarReporteTotalVentasPorCategoriaImg = async () => {
    try {
      const canvas = await html2canvas(document.getElementById('TotalVentasPorCategoriaChart'));
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.text('Reporte de Total de Ventas por Categoría de Producto', 20, 10);

      const pageWidth = pdf.internal.pageSize.width;
      const imgWidth = 100;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const xPos = (pageWidth - imgWidth) / 2;

      pdf.addImage(imgData, xPos, 20, imgWidth, imgHeight);

      pdf.save('reporte_total_ventas_por_categoria_con_grafico.pdf');
    } catch (error) {
      console.error('Error al generar el reporte con imagen:', error);
    }
  };





  return (
    <div>
      <Header Rol={Rol} />
      <Container className="margen-contenedor text-center">
        <Row className="g-3">
          <Col sm={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Card>
              <Card.Body>
                <Card.Title>Estado Producto</Card.Title>
              </Card.Body>
              <Card.Body>
                <Button onClick={generarReporteAlmacenImg}>
                  Generar reporte con imagen
                </Button>

                
              </Card.Body>
            </Card>
          </Col>

          <Col sm={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
            <Card>
              <Card.Body>
                <Card.Title>PRODUCTOS</Card.Title>
                <canvas id="productosChart" height="300"></canvas>
              </Card.Body>
              <Card.Body>
                <Button onClick={generarReporteAlmacen}>
                  Generar reporte
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm="6" md="6" lg="4">
            <Card>
              <Card.Body>
                <Card.Title>Tasa de ventas por mes</Card.Title>
                <canvas id="tasaVentasPorMesChart" height="250"></canvas>
              </Card.Body>
              <Card.Body className="d-flex flex-column align-items-stretch">
                <Button
                  onClick={generarReporteTasaVentasMes}
                  className="btn btn-primary mb-2"
                >
                  Generar reporte
                </Button>
                <Button
                  onClick={generarReporteTasaVentasMesImg}
                  className="btn btn-success mb-2"
                >
                  Generar reporte con imagen
                </Button>

                
                <Button
                  variant="secondary"
                  onClick={enviarCorreo2}
                  className="mt-2"
                >
                  Enviar por Correo
                </Button>



         <Button
                  variant="success"
                  onClick={exportarAExcel}
                  className="m-1"
                >
                  <FaFileExcel style={{ color: "white" }} />
                </Button>
              </Card.Body>
            </Card>
          </Col>


          <Col sm="6" md="6" lg="4">
            <Card>
              <Card.Body>
                <Card.Title>Total ventas cliente</Card.Title>
                <canvas id="TotalVentasPorClienteChart" height="250"></canvas>
              </Card.Body>
              <Card.Body className="d-flex flex-column align-items-stretch">
                <Button
                  onClick={generarReporteTotalVentaPorCliente}
                  className="btn btn-primary mb-2"
                >
                  Generar reporte
                </Button>
                <Button
                  onClick={generarReporteTotalVentaPorClienteImg}
                  className="btn btn-success mb-2"
                >
                  Generar reporte con imagen
                </Button>
                <Button
                  variant="secondary"
                  onClick={enviarCorreo3}
                  className="mt-2"
                >
                  Enviar por Correo
                </Button>

         
         <Button
                  variant="success"
                  onClick={exportarAExcel2}
                  className="m-1"
                >
                  <FaFileExcel style={{ color: "white" }} />
                </Button>
              </Card.Body>
            </Card>
          </Col>






          <Col sm="6" md="6" lg="4">
            <Card>
              <Card.Body>
                <Card.Title>Total ventas por año</Card.Title>
                <canvas id="TotalVentasPorAnioChart" height="250"></canvas>
              </Card.Body>
              <Card.Body className="d-flex flex-column align-items-stretch">
                <Button onClick={generarReporteTotalVentaPorAnio} className="btn btn-primary mb-2">
                  Generar reporte
                </Button>
                <Button
                  onClick={generarReporteTotalVentaPorAnioImg}
                  className="btn btn-success mb-2"
                >
                  Generar reporte con imagen
                </Button>

                <Button
                  variant="secondary"
                  onClick={enviarCorreo4}
                  className="mt-2"
                >
                  Enviar por Correo
                </Button>
         
         <Button
                  variant="success"
                  onClick={exportarAExcel3}
                  className="m-1"
                >
                  <FaFileExcel style={{ color: "white" }} />
                </Button>
              </Card.Body>
            </Card>
          </Col>


          <Col sm="6" md="6" lg="4">
            <Card>
              <Card.Body>
                <Card.Title>Promedio ventas por producto</Card.Title>
                <canvas id="PromedioVentasPorProductoChart" height="250"></canvas>
              </Card.Body>
              <Card.Body className="d-flex flex-column align-items-stretch">
                <Button
                  onClick={generarReportePromedioVentasPorProducto}
                  className="btn btn-primary mb-2"
                >
                  Generar reporte
                </Button>
                <Button
                  onClick={generarReportePromedioVentasPorProductoImg}
                  className="btn btn-success mb-2"
                >
                  Generar reporte con imagen
                </Button>
                <Button
                  variant="secondary"
                  onClick={enviarCorreo5}
                  className="mt-2"
                >
                  Enviar por Correo
                </Button>
         
         <Button
                  variant="success"
                  onClick={exportarAExcel4}
                  className="m-1"
                >
                  <FaFileExcel style={{ color: "white" }} />
                </Button>
              </Card.Body>
            </Card>
          </Col>


          <Col sm="6" md="6" lg="4">
            <Card>
              <Card.Body>
                <Card.Title>Número ventas por producto</Card.Title>
                <canvas id="NumeroVentasPorProductoChart" height="250"></canvas>
              </Card.Body>
              <Card.Body className="d-flex flex-column align-items-stretch">
                <Button
                  onClick={generarReporteNumeroVentasPorProducto}
                  className="btn btn-primary mb-2"
                >
                  Generar reporte
                </Button>
                <Button
                  onClick={generarReporteNumeroVentasPorProductoImg}
                  className="btn btn-success mb-2"
                >
                  Generar reporte con imagen
                </Button>
                <Button
                  variant="secondary"
                  onClick={enviarCorreo6}
                  className="mt-2"
                >
                  Enviar por Correo
                </Button>
         
         <Button
                  variant="success"
                  onClick={exportarAExcel5}
                  className="m-1"
                >
                  <FaFileExcel style={{ color: "white" }} />
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col sm="6" md="6" lg="4">
            <Card>
              <Card.Body>
                <Card.Title>Total ventas por categoría de producto</Card.Title>
                <canvas id="TotalVentasPorCategoriaChart" height="250"></canvas>
              </Card.Body>
              <Card.Body className="d-flex flex-column align-items-stretch">
                <Button
                  onClick={generarReporteTotalVentasPorCategoria}
                  className="btn btn-primary mb-2"
                >
                  Generar reporte
                </Button>
                <Button
                  onClick={generarReporteTotalVentasPorCategoriaImg}
                  className="btn btn-success mb-2"
                >
                  Generar reporte con imagen
                </Button>
                <Button
                  variant="secondary"
                  onClick={enviarCorreo8}
                  className="mt-2"
                >
                  Enviar por Correo
                </Button>
         
         <Button
                  variant="success"
                  onClick={exportarAExcel5}
                  className="m-1"
                >
                  <FaFileExcel style={{ color: "white" }} />
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Estadisticas; 