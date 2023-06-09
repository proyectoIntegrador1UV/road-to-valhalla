
import Floor from './Floor';
import WelcomeWall from './WelcomeWall';
import { ScrollControls, Scroll, Sky} from '@react-three/drei';

import { SceneMitology } from './SceneMitology';

export default function Experience() {
    return <>
        

        <Sky/>
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        
        <ScrollControls horizontal pages={4} damping={0.2} infinite>
        <Scroll style={{ width: '100%' }}>
        
        <WelcomeWall />
        <Floor />
        <SceneMitology/>
        
        </Scroll>
        </ScrollControls>


    </>
}