import { useState } from 'react';
import clsx from 'clsx';
import Box from '@mui/material/Box';

const VscScreen = ({currentScreenContent}) => {
    
    const [isVscVisible, setIsVscVisible] = useState(true);

    const handleVscVisible = () => {
        currentScreenContent(' ');
    };


    const vscScreen = clsx({
        vscScreen: true,
        show: isVscVisible,
        hide: !isVscVisible
    });

    return (
        <div className={vscScreen}>
        <div className="vsc-top">
            <Box
            sx={{
                border: '1px white solid',
                height: '25px',
                minHeight: '20px',
                width: '50%',
                mr: '10%',
                color: 'rgb(200,200,200)',
                p: '2px',
                borderRadius: '5px'
            }}
            >
                &gt;&gt;  portfolio-v3
            </Box>
            <div className="vsc-button bg-orange" onClick={handleVscVisible}>-</div>
            <div className="vsc-button bg-green" onClick={handleVscVisible}></div>
            <div className="vsc-button bg-red" onClick={handleVscVisible}>
                .
            </div>

        </div>
        <div className="vsc-body">
            <div>
                <span className="return">from</span> <span className="code-line">django.contrib.auth</span> <span className="return">import</span> <span className="code-line">get_user_model</span>
            </div>
            <div>
                <span className="return">from</span> <span className="code-line">rest_framework</span> <span className="return">import</span> <span className="code-line">serializer</span>
            </div>
            <div>
                <span className="return">from</span> <span className="code-line">.models</span> <span className="return">import</span> <span className="code-line">Profile</span>
            </div>
            <br />


            <div>
                <span className="blue">class</span> <span className="class">UserSerializer(serializers.ModelSerializer): </span>
            </div>
            <div className="indent-1">
                <span className="string"> """ Serializer for users."""</span>
            </div>

            <div className='indent-1'>
                <span className="lblue">users = </span> <span className="class">UserSerializer(</span><span className="lblue">many=True, required=False</span><span className="class">)</span>
            </div>
            <div className='indent-1'>
                <span className="blue">class </span> <span className="class">Meta:</span>
            </div>
            <div className="indent-2">
                <span className="lblue">model=</span><span className="def">get_user_model()</span>
            </div>
            <div className="indent-2">
                <span className="lblue">fields=</span><span className="def">[</span><span className="string"> "email", "name", "password"</span> <span className="def">]</span>
            </div>
            <br />


            <div>
                <span className="blue">class</span> <span className="class">ProfileSerializer(serializers.ModelSerializer): </span>
            </div>
            <div className="indent-1">
                <span className="string"> """ Serializer for my portfolio Info."""</span>
            </div>

            <div className='indent-1'>
                <span className="lblue">users = </span> <span className="class">ProfileSerializer(</span><span className="lblue">many=True, required=False</span><span className="class">)</span>
            </div>
            <div className='indent-1'>
                <span className="blue">class </span> <span className="class">Meta:</span>
            </div>
            <div className="indent-2">
                <span className="lblue">model=</span><span className="def">Profile</span>
            </div>
            <div className="indent-2">
                <span className="lblue">fields=</span><span className="def">[</span><span className="string"> "user", "description", "contact", "skills"</span> <span className="def">]</span>
            </div>
            <div className="indent-2">
                <span className="lblue">read_only_fields=</span><span className="def">[</span><span className="string"> "user"</span> <span className="def">]</span>
            </div>

            <div className="indent-1">
                <span className="blue">def</span> <span className="def">update(</span><span className="lblue">self, instance, validated_data</span> <span className="def">):</span>
            </div>
            <div className="indent-2">
                <span className="string"> """Update method for current api."""</span>
            </div>
            <div className="indent-2">
                <span className="return">if</span> <span className="code-line">validated_data.</span><span className="return">get</span><span className="code-line">('user'):</span>
            </div>
            <div className="indent-3">
                <span className="code-line">validated_data.</span><span className="return">pop</span><span className="code-line">('user')</span>
            </div>
            <div className="indent-2">
                <span className="lblue">user=</span><span className="return">super().update</span><span className="code-line">(instance, validated_data)</span>
            </div>
            <div className="indent-2">
                <span className="return">return </span><span className="lblue">user</span>
            </div>





        </div>
        
        <Box
        sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '15px',
            display: 'flex',
            gap: 1,
            pl: 1,
            pb: 3,
            zIndex: 9999,
            background: 'rgb(25,25,25)'
        }}
        >
            <div className='vsc-terminal-item'>PROBLEMS</div>
            <div className='vsc-terminal-item'>OUTPUT</div>
            <div className='vsc-terminal-item'>DEBUG</div>
            <div className='vsc-terminal-item'>TERMINAL</div>

        </Box>

    </div>
    );
}
 
export default VscScreen;