import React, {useEffect,useState} from 'react'

function App() {
  const [expense,setExpense] = useState([]);
  const [formData,setFormData] = useState({
    title:'',
    amount:'',
    category:'Khana',
    date: new Date().toISOString().split('T')[0]
  })
  const [filterCategory, setFilterCategory] = useState('Ali');
  useEffect(()=>{
    const saved = localStorage.getItem('expense');
    if(expense){
      setExpense(JSON.parse(saved));
      return
    }
    // expense ? setExpense(JSON.parse(saved)) : [];
  },[expense]);
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const addExpense = (e) =>{
    e.preventDefault();
    if(!formData.name || !formData.amount){
      alert('Please fill all input field ⚠️');
      return;
    }
    const newExpense = {
      id: Date.now(),
      title: formData.name,
      amount:parseFloat(formData.amount),
      category:formData.category,
      date: formData.date()
    }
    setExpense([...expense,newExpense]);
    setFormData({
    title:'',
    amount:'',
    category:'Khana',
    date: new Date.toISOString().split('T')[0]
    });
  };

  const deleteExpense = (id) =>{
    expense && setExpense(expense.filter(exp=> exp.id !== id))
  };

  const filteredExpense = filterCategory === 'All' 
  ? expense : expense && expense.filter(exp=> exp.category === filterCategory);
  const total = filteredExpense && filteredExpense.reduce((sum, exp)=> sum + exp.amount,0);
  const category = ['All','Khana','Sawari','Shopping','Entertainment','Dusra'];
  return (
    <div style={{
      maxWidth:'900px',
      width:'80%',
      margin: '40px auto',
      padding:'30px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8f9fa',
      borderRadius:'20px',
      boxShadow: '0px 10px 30px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ textAlign:'center', color:'#1e3a8a', marginBottom:'10px' }}>
        Smart Kharcha Tracker 
      </h1>
    </div>
  )
}

export default App