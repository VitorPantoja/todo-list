import checkNote from '../../assets/check.svg'
import clipboard from '../../assets/clipboard.svg'
import marked from '../../assets/marked.svg'
import trash from '../../assets/trash.svg'
import { defaultTheme } from '../../styles/theme/default'

export const Home = () => {
  const hasNotes = false
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%' }}>
      <div style={{ margin: '3%', width: '50%' }}>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            marginBottom: '2%'
          }}
        >
          <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
            <span style={{ color: defaultTheme.blue, border: defaultTheme['gray-100'], fontSize: '16px' }}>
              <strong>Tarefas criadas</strong>
            </span>
            <div style={{ background: defaultTheme['gray-500'], border: defaultTheme['gray-100'], borderRadius: '8px', paddingInline: '8px' }}>
              <span style={{ color: defaultTheme['gray-100'], fontSize: '16px' }}>0</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
            <span style={{ color: defaultTheme.purpleDark, border: defaultTheme['gray-100'], fontSize: '16px' }}>
              <strong>Concluídas</strong>
            </span>
            <div style={{ background: defaultTheme['gray-500'], border: defaultTheme['gray-100'], borderRadius: '8px', paddingInline: '8px' }}>
              <span style={{ color: defaultTheme['gray-100'], fontSize: '16px' }}>0</span>
            </div>
          </div>
        </div>
        {hasNotes ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: 'solid 2px',
              borderColor: defaultTheme['gray-400'],
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              width: '100%',
              gap: '0.5rem',
              flexDirection: 'column',
              height: '25vh'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                width: '100%',
                flexDirection: 'column'
              }}
            >
              <img src={clipboard} width={62} height={72} />
              <span style={{ color: defaultTheme['gray-300'], fontSize: '16px' }}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
              </span>
              <span style={{ color: defaultTheme['gray-400'], fontSize: '16px' }}>
                <strong>Crie tarefas e organize seus itens a fazer</strong>
              </span>
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: 'solid 2px',
              borderColor: defaultTheme['gray-400'],
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              width: '100%',
              gap: '0.5rem',
              flexDirection: 'column',
              padding: '1% 0'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between',
                width: '95%'
              }}
            >
              <a href="">
                <img src={marked} alt="" />
              </a>

              <span style={{ textDecoration: 'line-through', color: defaultTheme['gray-300'], fontSize: '16px' }}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </span>
              <a href="">
                <img src={trash} alt="" />
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between',
                width: '95%'
              }}
            >
              <a href="">
                <img src={checkNote} alt="" />
              </a>

              <span style={{ color: defaultTheme['gray-100'], fontSize: '16px' }}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
              </span>
              <a href="">
                <img src={trash} alt="" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
