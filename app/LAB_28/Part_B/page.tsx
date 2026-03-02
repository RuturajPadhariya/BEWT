import Link from 'next/link'
import { submitUserData } from './actions'

// wrapper server action to satisfy form action type
async function handleSubmit(formData: FormData) {
  'use server'
  await submitUserData(formData)
}

export default function DemoB() {
  return (
    <div style={{ backgroundColor: '#121212', color: '#e0e0e0', padding: '20px' }}>
      <Link 
        href="/LAB_28"
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#90cdf4',
          textDecoration: 'none',
          fontSize: '14px'
        }}
      >
        ← Back to Lab Home
      </Link>

      <div style={{
        backgroundColor: '#1e1e1e',
        border: '2px solid #333',
        borderRadius: '8px',
        padding: '30px',
        maxWidth: '600px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '20px'
        }}>
          <span style={{
            backgroundColor: '#10b981',
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>
            B
          </span>
          <div>
            <h2 style={{ margin: 0 }}>Demo B: External Server Action</h2>
            <p style={{ margin: '5px 0 0', color: '#aaa', fontSize: '14px' }}>
              Server action imported from separate file
            </p>
          </div>
        </div>

        <form action={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="firstName"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#ddd'
              }}
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Enter your first name"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="lastName"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#ddd'
              }}
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Enter your last name"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #555',
                backgroundColor: '#2a2a2a',
                color: '#e0e0e0',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="age"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#ddd'
              }}
            >
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              required
              placeholder="Enter your age"
              min={1}
              max={120}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #555',
                backgroundColor: '#2a2a2a',
                color: '#e0e0e0',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="country"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#ddd'
              }}
            >
              Country:
            </label>
            <select
              id="country"
              name="country"
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
                backgroundColor: '#2a2a2a'
              }}
            >
              <option value="">Select a country</option>
              <option value="USA">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="bio"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#ddd'
              }}
            >
              Bio:
            </label>
            <textarea
              id="bio"
              name="bio"
              required
              placeholder="Tell us about yourself"
              rows={4}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #555',
                backgroundColor: '#2a2a2a',
                color: '#e0e0e0',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#10b981',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              width: '100%'
            }}
          >
            Submit User Data
          </button>
        </form>

        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: '#f0fdf4',
          borderLeft: '4px solid #10b981',
          borderRadius: '4px'
        }}>
          <h4 style={{ marginTop: 0, color: '#065f46' }}>ℹ️ How it works:</h4>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#047857', lineHeight: '1.6' }}>
            <li>Server action is defined in <code>actions.ts</code> file</li>
            <li>Action is imported and used in the component</li>
            <li>Promotes code reusability and separation of concerns</li>
            <li>File has <code>&apos;use server&apos;</code> at the top for all exports</li>
            <li>Check server console for printed form data</li>
          </ul>
        </div>
      </div>
    </div>
  )
}