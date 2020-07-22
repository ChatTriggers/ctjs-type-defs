///////////
// Utils //
///////////
type int = number;
type Int = number;
type char = number;
type byte = number;
type float = number;
type Float = number;
type double = number;
type Double = number;
type long = number;
type Long = number;

type JavaClass<T extends string> = any;

declare function test(f: float): Double;


//////////////////
// JAVA CLASSES //
//////////////////
//#region JavaClasses
declare class Thread {
    constructor();
    constructor(func: () => void);
    constructor(func: () => void, name: string);

    start(): void;
    static sleep(millis: long): void;
    static sleep(millis: long, nanos: int): void;
}

declare interface Keyboard {
    EVENT_SIZE: int;
    CHAR_NONE: int;
    KEY_NONE: int;

    KEY_ESCAPE: int;
    KEY_0: int;
    KEY_1: int;
    KEY_2: int;
    KEY_3: int;
    KEY_4: int;
    KEY_5: int;
    KEY_6: int;
    KEY_7: int;
    KEY_8: int;
    KEY_9: int;
    KEY_MINUS: int;
    KEY_EQUALS: int;
    KEY_BACK: int;
    KEY_TAB: int;
    KEY_Q: int;
    KEY_W: int;
    KEY_E: int;
    KEY_R: int;
    KEY_T: int;
    KEY_Y: int;
    KEY_U: int;
    KEY_I: int;
    KEY_O: int;
    KEY_P: int;
    KEY_LBRACKET: int;
    KEY_RBRACKET: int;
    KEY_RETURN: int;
    KEY_LCONTROL: int;
    KEY_A: int;
    KEY_S: int;
    KEY_D: int;
    KEY_F: int;
    KEY_G: int;
    KEY_H: int;
    KEY_J: int;
    KEY_K: int;
    KEY_L: int;
    KEY_SEMICOLON: int;
    KEY_APOSTROPHE: int;
    KEY_GRAVE: int;
    KEY_LSHIFT: int;
    KEY_BACKSLASH: int;
    KEY_Z: int;
    KEY_X: int;
    KEY_C: int;
    KEY_V: int;
    KEY_B: int;
    KEY_N: int;
    KEY_M: int;
    KEY_COMMA: int;
    KEY_PERIOD: int;
    KEY_SLASH: int;
    KEY_RSHIFT: int;
    KEY_MULTIPLY: int;
    KEY_LMENU: int;
    KEY_SPACE: int;
    KEY_CAPITAL: int;
    KEY_F1: int;
    KEY_F2: int;
    KEY_F3: int;
    KEY_F4: int;
    KEY_F5: int;
    KEY_F6: int;
    KEY_F7: int;
    KEY_F8: int;
    KEY_F9: int;
    KEY_F10: int;
    KEY_NUMLOCK: int;
    KEY_SCROLL: int;
    KEY_NUMPAD7: int;
    KEY_NUMPAD8: int;
    KEY_NUMPAD9: int;
    KEY_SUBTRACT: int;
    KEY_NUMPAD4: int;
    KEY_NUMPAD5: int;
    KEY_NUMPAD6: int;
    KEY_ADD: int;
    KEY_NUMPAD1: int;
    KEY_NUMPAD2: int;
    KEY_NUMPAD3: int;
    KEY_NUMPAD0: int;
    KEY_DECIMAL: int;
    KEY_F11: int;
    KEY_F12: int;
    KEY_F13: int;
    KEY_F14: int;
    KEY_F15: int;
    KEY_F16: int;
    KEY_F17: int;
    KEY_F18: int;
    KEY_KANA: int;
    KEY_F19: int;
    KEY_CONVERT: int;
    KEY_NOCONVERT: int;
    KEY_YEN: int;
    KEY_NUMPADEQUALS: int;
    KEY_CIRCUMFLEX: int;
    KEY_AT: int;
    KEY_COLON: int;
    KEY_UNDERLINE: int;
    KEY_KANJI: int;
    KEY_STOP: int;
    KEY_AX: int;
    KEY_UNLABELED: int;
    KEY_NUMPADENTER: int;
    KEY_RCONTROL: int;
    KEY_SECTION: int;
    KEY_NUMPADCOMMA: int;
    KEY_DIVIDE: int;
    KEY_SYSRQ: int;
    KEY_RMENU: int;
    KEY_FUNCTION: int;
    KEY_PAUSE: int;
    KEY_HOME: int;
    KEY_UP: int;
    KEY_PRIOR: int;
    KEY_LEFT: int;
    KEY_RIGHT: int;
    KEY_END: int;
    KEY_DOWN: int;
    KEY_NEXT: int;
    KEY_INSERT: int;
    KEY_DELETE: int;
    KEY_CLEAR: int;
    KEY_LMETA: int;
    KEY_LWIN: int;
    KEY_RMETA: int;
    KEY_RWIN: int;
    KEY_APPS: int;
    KEY_POWER: int;
    KEY_SLEEP: int;

    isCreated(): boolean;
    poll(): void;
    isKeyDown(key: int): boolean;
    getKeyName(key: int): string;
    getKeyIndex(key: int): int;
    getNumKeyboardEvent(): int;
    next(): boolean;
    getKeyCount(): int;
    getEventCharater(): char;
    getEventKey(): int;
};

declare const Keyboard: Keyboard;

interface Iterator<T> {
    hasNext(): boolean;
    next(): T;
    remove(): void;
    forEachRemaining(func: (el: T) => void);
}

interface Iterable<T> {
    iterator(): Iterator<T>;
    forEach(func: (el: T) => void);
}

class BufferedImage {
    // TODO:
}

/**
 * A generic 3-element tuple that is represented by single precision-floating
 * point x,y,z coordinates.
 */
interface Tuple3<T extends number> {
    x: T;
    y: T;
    z: T;

    /**
     * Returns a string that contains the values of this Tuple3f.
     * The form is (x,y,z).
     * @return the String representation
     */
    toString(): string;
    set(x: T, y: T, z: T): void;
    set(t: T[]): void;
    set(t1: Tuple3f): void;
    get(t: Tuple3f): void;
    add(t1: Tuple3f): void;
    add(t1: Tuple3f, t2: Tuple3f): void;
    sub(t1: Tuple3f): void;
    sub(t1: Tuple3f, t2: Tuple3f): void;
    negate(t: Tuple3f): void
    negate(): void;
    scale(s: T, t: Tuple3f): void;
    scale(s: T);
    scaleAdd(s: T, t1: Tuple3f, t2: Tuple3f): void;
    scaleAdd(s: T, t: Tuple3f): void;
    equals(o: any): boolean;
    clamp(min: T, max: T, t: Tuple3f): void;
    clampMin(min: T, t: Tuple3f): void;
    clampMax(max: T, t: Tuple3f): void;
    absolute(t: Tuple3f): void;
    clamp(min: T, max: T): void;
    clampMin(min: T): void;
    clampMax(max: T): void;
    absolute(): void;
    getX(): T;
    getY(): T;
    getZ(): T;
    setX(x: T): void;
    setY(y: T): void;
    setZ(z: T): void;
}

interface Vector3<T extends number> extends Tuple3<T> {
    lengthSquared(): T;
    length(): T;
    cross(v1: Vector3<T>, v2: Vector3<T>): void;
    dot(v: Vector3<T>): void;
    normalize(v: Vector3<T>): void;
    normalize(): void;
    angle(v: Vector3<T>): void;
}

interface Tuple2<T extends number> {
    // TODO:
}

interface Vector2<T extends number> extends Tuple2<T> {
    // TODO:
}

type Vector3d = Vector3<double>;
type Vector3f = Vector3<float>;
type Tuple3f = Tuple3<float>;
type Vector2d = Vector2<double>;
type Vector2f = Vector2<float>;

//#endregion

///////////////////////
// MINECRAFT CLASSES //
///////////////////////
//#region Minecraft Classes

interface ISoundCategory<Name extends string, Id extends int> {
    getCategoryName(): Name;
    getCategoryId(): Id;
    getCategory(name: string): ISoundCategory<string, int>;
}

namespace SoundCategory {
    declare const MASTER: ISoundCategory<'master', 0>;
    declare const MUSIC: ISoundCategory<'music', 1>;
    declare const RECORDS: ISoundCategory<'records', 2>;
    declare const WEATHER: ISoundCategory<'weather', 3>;
    declare const BLOCKS: ISoundCategory<'blocks', 4>;
    declare const MOBS: ISoundCategory<'hostile', 5>;
    declare const ANIMALS: ISoundCategory<'neutral', 6>;
    declare const PLAYERS: ISoundCategory<'player', 7>;
    declare const AMBIENT: ISoundCategory<'ambient', 8>;
}

type SoundCategoryStrings = keyof typeof SoundCategory;

//#endregion

////////////////////////
// OBFUSCATED CLASSES //
////////////////////////
//#region

// Basically just an annotation, acts as any but lets the user
// know the name of the returned class, and that it is obfuscated.
type ObfuscatedClass<T extends string> = {
    [key: string]: any;
}

type ObfGuiScreen = ObfuscatedClass<'net.minecraft.client.gui.GuiScreen'>;
type ObfPacket = ObfuscatedClass<'net.minecraft.network.Packet'>;
type ObfEvent = ObfuscatedClass<'net.minecraftforge.fml.common.eventhandler.Event'>;
type ObfIChatComponent = ObfuscatedClass<'net.minecraft.util.IChatComponent'>;
type ObfMouseEvent = ObfuscatedClass<'net.minecraftforge.client.event.MouseEvent'>;
type ObfClientChatReceivedEvent = ObfuscatedClass<'net.minecraftforge.client.event.ClientChatReceivedEvent'>;
type ObfPlaySoundEvent = ObfuscatedClass<'net.minecraftforge.client.event.sound.PlaySoundEvent'>;
type ObfOnConfigChangedEvent = ObfuscatedClass<'net.minecraftforge.fml.client.event.ConfigChangedEvent.OnConfigChangedEvent'>;
type ObfFontRenderer = ObfuscatedClass<'net.minecraft.client.gui.FontRenderer'>;
type ObfNBTTagList = ObfuscatedClass<'net.minecraft.nbt.NBTTagList'>;
type ObfKeyBinding = ObfuscatedClass<'net.minecraft.client.settings.KeyBinding'>;
type ObfDynamicTexture = ObfuscatedClass<'net.minecraft.client.renderer.texture.DynamicTexture'>;
type ObfEntityPlayer = ObfuscatedClass<'net.minecraft.entity.player.EntityPlayer'>;
type ObfMinecraft = ObfuscatedClass<'net.minecraft.client.Minecraft'>;
type ObfNetHandlerPlayClient = ObfuscatedClass<'net.minecraft.client.network.NetHandlerPlayClient'>;
type ObfGuiNewChat = ObfuscatedClass<'net.minecraft.client.gui.GuiNewChat'>;
type ObfGuiPlayerTabOverlay = ObfuscatedClass<'net.minecraft.client.gui.GuiPlayerTabOverlay'>;
type ObfPacket = ObfuscatedClass<'net.minecraft.network.Packet'>;
type ObfGameSettings = ObfuscatedClass<'net.minecraft.client.settings.GameSettings'>;
type ObfEnumPlayerModelParts = ObfuscatedClass<'net.minecraft.entity.player.EnumPlayerModelParts'>;
type ObfEnumChatVisibility = ObfuscatedClass<'net.minecraft.entity.player.EntityPlayer.EnumChatVisibility'>;
type ObfEntityPlayerSP = ObfuscatedClass<'net.minecraft.client.entity.EntityPlayerSP'>;
type ObfWorldClient = ObfuscatedClass<'net.minecraft.client.multiplayer.WorldClient'>;
type ObfIInventory = ObfuscatedClass<'net.minecraft.inventory.IInventory'>;
type ObfContainer = ObfuscatedClass<'net.minecraft.inventory.Container'>;
type ObfItem = ObfuscatedClass<'net.minecraft.items.Item'>;
type ObfItemStack = ObfuscatedClass<'net.minecraft.items.ItemStack'>;

//#endregion


//////////////
// TRIGGERS //
//////////////
//#region Triggers

/**
 * Lowest is ran last
 */
declare enum Priority {
    HIGHEST, HIGH, NORMAL, LOW, LOWEST
}

namespace OnTrigger {
    /**
     * Lowest is ran last
     */
    declare enum Priority {
        HIGHEST, HIGH, NORMAL, LOW, LOWEST
    }
}

declare interface OnTrigger {
    /**
     * Sets a triggers priority using Priority.
     * Highest runs first.
     * @param priority the priority of the trigger
     * @return the trigger for method chaining
     */
    setPriority(priority: Priority): this;

    /**
     * Registers a trigger based on its type.
     * This is done automatically with TriggerRegister.
     * @return the trigger for method chaining
     */
    register(): this;

    /**
     * Unregisters a trigger.
     * @return the trigger for method chaining
     */
    unregister(): this;
}

declare interface OnChatTrigger extends OnTrigger {
    /**
     * Sets if the chat trigger should run if the chat event has already been canceled.
     * True by default.
     * @param bool Boolean to set
     * @return the trigger object for method chaining
     */
    triggerIfCanceled(trigger: boolean): this;

    /**
     * Sets the chat criteria for `.matchesChatCriteria`.
     * Arguments for the trigger's method can be passed in using ${variable}.
     * Example: `OnChatTrigger.setChatCriteria("<${name}> ${message}");`
     * Use ${*} to match a chat message but ignore the pass through.
     * @param chatCriteria the chat criteria to set
     * @return the trigger object for method chaining
     */
    setChatCriteria(criteria: string | RegExp): this;

    /**
     * Alias for .setChatCriteria.
     * @param chatCriteria the chat criteria to set
     * @return the trigger object for method chaining
     */
    setCriteria(criteria: string | RegExp): this;

    /**
     * Sets the chat parameter for `Parameter`.
     * Clears current parameter list.
     * @param parameter the chat parameter to set
     * @return the trigger object for method chaining
     */
    setParameter(parameter: string): this;

    /**
     * Sets multiple chat parameters for `Parameter`.
     * Clears current parameter list.
     * @param parameters the chat parameters to set
     * @return the trigger object for method chaining
     */
    setParameters(...parameters: string[]): this;

    /**
     * Adds chat parameter for `Parameter`.
     * @param parameter the chat parameter to add
     * @return the trigger object for method chaining
     */
    addParameter(parameter: string): this;

    /**
     * Adds multiple chat parameters for `Parameter`.
     * @param parameters the chat parameters to add
     * @return the trigger object for method chaining
     */
    addParameters(...parameters: string[]): this;

    /**
     * Adds the "start" parameter
     * @return the trigger object for method chaining
     */
    setStart(): this;

    /**
     * Adds the "contains" parameter
     * @return the trigger object for method chaining
     */
    setContains(): this;

    /**
     * Adds the "end" parameter
     * @return the trigger object for method chaining
     */
    setEnd(): this;

    /**
     * Makes the trigger match the entire chat message
     * @return the trigger object for method chaining
     */
    setExact(): this;

    /**
     * Makes the chat criteria case insensitive
     * @return the trigger object for method chaining
     */
    setCaseInsensitive(): this;
}

declare interface OnCommandTrigger extends OnTrigger {
    /**
     * Sets the command name.
     * Example:
     * OnCommandTrigger.setCommandName("test")
     * would result in the command being /test
     *
     * @param commandName The command name
     * @return the trigger for additional modification
     */
    setCommandName(name: string): this;

    /**
     * Alias for .setCommandName
     *
     * @param commandName The command name
     * @return the trigger for additional modification
     */
    setName(name: string): this;
}

declare interface OnRegularTrigger extends OnTrigger { };

declare interface OnRenderTrigger extends OnTrigger {
    /**
     * Sets if the render trigger should run if the event has already been canceled.
     * True by default.
     * @param bool Boolean to set
     * @return the trigger object for method chaining
     */
    triggerIfCanceled(trigger: boolean): this;
}

declare interface OnSoundPlayTrigger extends OnTrigger {
    soundNameCriteria: string;

    /**
     * Sets the sound name criteria.
     * Short hand for `OnSoundPlayTrigger.setSoundNameCriteria`.
     *
     * @param soundNameCriteria the sound name
     * @return the trigger for method chaining
     */
    setCriteria(soundNameCriteria: string): this;
}

declare interface OnStepTrigger extends OnTrigger {
    /**
     * Sets the frames per second that the trigger activates.
     * This has a maximum one step per second.
     * @param fps the frames per second to set
     * @return the trigger for method chaining
     */
    setFps(fps: Long): this;

    /**
     * Sets the delay in seconds between the trigger activation.
     * This has a minimum of one step every second. This will override `.setFps`.
     * @param delay The delay in seconds
     * @return the trigger for method chaining
     */
    setDelay(delay: Long): this;
}

//#endregion

////////////
// ENGINE //
////////////
//#region Engine

interface CallbackInfoReturnable { }

interface CancellableEvent {
    setCanceled(canceled: boolean): void;
    setCancelled(cancelled: boolean): void;
    isCancelable(): boolean;
    isCancellable(): boolean;
    isCanceled(): boolean;
    isCancelled(): boolean;
}

declare enum InteractAction {
    RIGHT_CLICK_BLOCK,
    RIGHT_CLICK_EMPTY,
    LEFT_CLICK_BLOCK,
    RIGHT_CLICK_ENTITY,
    RIGHT_CLICK_ITEM,
    LEFT_CLICK_EMPTY,
    UNKNOWN
}

interface EnumParticleTypes {
    // TODO
}

enum Octave {
    LOW,
    MID,
    HIGH
}

//#region IRegister
type TriggerTypeRenderOther = 'renderOverlay' | 'renderPlayerList' |
    'renderCrosshair' | 'renderDebug' | 'renderBossHealth' | 'renderHealth' |
    'renderArmor' | 'renderFood' | 'renderMountHealth' | 'renderExperience' |
    'renderHotbar' | 'renderAir';

type ChatTriggerFunc = (...chatVariables: string[], event: ObfClientChatReceivedEvent) => void;
type CommandTriggerFunc = (...args: string[]) => void;
type SoundPlayTriggerFunc = (position: Vector3f, name: string, volume: float, pitch: float, category: SoundCategory, event: Event) => void;
type StepTriggerFunc = (steps: Long) => void;
type TickTriggerFunc = (ticks: Long) => void;
type RenderWorldFunc = (partialTicks: float) => void;
type RenderEntityFunc = (entity: Entity, position: Vector3d, partialTicks: float, event: CallbackInfoReturnable) => void;
type RenderOtherFunc = (event: CallbackInfoReturnable) => void;
type ClickedFunc = (x: Float, y: Float, button: Int, buttonIsDown: boolean) => void;
type DraggedFunc = (deltaX: Float, deltaY: Float, x: Float, y: Float, mouseButton: Int) => void;
type GuiOpenedFunc = (event: Event) => void;
type ScreenshotTakenFunc = (fileName: string, event: CallbackInfoReturnable) => void;
type PickupItemFunc = (item: Item, player: PlayerMP, position: Vector3d, motion: Vector3d, event: Event) => void;
type DropItemFunc = (item: Item, player: PlayerMP, event: CancellableEvent) => void;
type MessageSentFunc = (message: string, event: CallbackInfoReturnable) => void;
type ItemTooltipFunc = (lines: string[], item: Item, event: CancellableEvent) => void;
type PlayerInteractFunc = (action: InteractAction, position: Vector3d, event: Event) => void;
type GuiRenderFunc = (mouseX: int, mouseY: int, gui: ObfGuiScreen) => void;
type GuiKeyFunc = (eventCharacter: char, eventKey: int, gui: ObfGuiScreen, event: CallbackInfoReturnable) => void;
type GuiMouseClickFunc = (mouseX: int, mouseY: int, mouseButton: int, gui: ObfGuiScreen, event: CallbackInfoReturnable) => void;
type GuiMouseReleaseFunc = GuiMouseClickFunc;
type GuiMouseDragFunc = GuiMouseClickFunc;
type ChatComponentClickedFunc = (component: TextComponent, event: CallbackInfoReturnable) => void;
type ChatComponentHoveredFunc = (component: TextComponent, x: int, y: int, event: CallbackInfoReturnable) => void;
type PacketSentFunc = (packet: ObfPacket, event: CallbackInfoReturnable) => void;
type DrawBlockHighlightFunc = (position: Vector3d, event: Event) => void;
type PlayerJoinedFunc = (player: PlayerMP) => void;
type PlayerLeftFunc = PlayerJoinedFunc;
type NoteBlockPlayFunc = (position: Vector3d, noteName: string, octave: Octave, event: Event) => void;
type NoteBlockChangeFunc = NoteBlockPlayFunc;
type BlockBreakFunc = (block: Block, player: PlayerMP, event: Event) => void;
type SpawnParticleFunc = (particle: Particle, particleType: EnumParticleTypes, event: CallbackInfoReturnable) => void;

interface IRegisterFunction {
    /**
     * Registers a new trigger that runs before a chat message is received.
     *
     * Passes through multiple arguments:
     * - Any number of chat criteria variables
     * - The chat event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger#triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnChatTrigger.setChatCriteria` Sets the chat criteria
     * - `OnChatTrigger.setParameter` Sets the chat parameter
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'chat', method: ChatTriggerFunc): OnChatTrigger;

    /**
     * Registers a new trigger that runs before an action bar message is received.
     *
     * Passes through multiple arguments:
     * - Any number of chat criteria variables
     * - The chat event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnChatTrigger.setChatCriteria` Sets the chat criteria
     * - `OnChatTrigger.setParameter` Sets the chat parameter
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'actionBar', method: ChatTriggerFunc): OnChatTrigger;

    /**
     * Registers a new command that will run the method provided.
     *
     * Passes through multiple arguments:
     * - The arguments supplied to the command by the user
     *
     * Available modifications:
     * - `OnCommandTrigger.setCommandName` Sets the command name
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'command', method: CommandTriggerFunc): OnCommandTrigger;

    /**
     * Registers a new trigger that runs before a sound is played.
     *
     * Passes through six arguments:
     * - The sound event's position
     * - The sound event's name
     * - The sound event's volume
     * - The sound event's pitch
     * - The sound event's category's name
     * - The sound event, which can be cancelled
     *
     * Available modifications:
     * - `OnSoundPlayTrigger.setCriteria` Sets the sound name criteria
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'soundPlay', method: SoundPlayTriggerFunc): OnSoundPlayTrigger;

    /**
     * Registers a new trigger that runs in predictable intervals. (60 per second by default)
     *
     * Passes through one argument:
     * - Steps elapsed
     *
     * Available modifications:
     * - `OnStepTrigger.setFps` Sets the fps, ie. how many times this trigger will fire
     *      per second
     * - `OnStepTrigger.setDelay` Sets the delay in seconds, ie how many seconds it take
     *      to fire. Overrides `OnStepTrigger.setFps`.
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'step', method: StepTriggerFunc): OnStepTrigger;

    /**
     * Registers a new trigger that runs before every game tick.
     *
     * Passes through one argument:
     * - Ticks elapsed
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'tick', method: TickTriggerFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs before the world is drawn.
     *
     * Passes through one argument:
     * - Partial ticks elapsed
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderWorld', method: RenderWorldFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs whenever an entity is rendered
     *
     * Passes through four arguments:
     * - The `Entity`
     * - The position as a Vector3d
     * - The partial ticks
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderEntity', method: RenderEntityFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the overlay is drawn.
     *
     * Passes through one argument:
     * - The render event, which cannot be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderOverlay', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the player list is being drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderPlayerList', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the crosshair is being drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderCrosshair', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a trigger that runs before the debug screen is being drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderDebug', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the boss health bar is being drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderBossHealth', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the player's health is being drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderHealth', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the player's armor bar is drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderArmor', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the player's food is being drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderFood', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the player's mount's health is being drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderMountHealth', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the player's experience is being drawn.
     *
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderExperience', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the player's hotbar is drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderHotbar', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the player's air level is drawn.
     *
     * Passes through one argument:
     * - The render event, which can be cancelled
     *
     * Available modifications:
     * - `OnRenderTrigger.triggerIfCanceled` Sets if triggered if event is already cancelled
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'renderAir', method: RenderOtherFunc): OnRenderTrigger;

    /**
     * Registers a new trigger that runs before the block highlight box is drawn.
     *
     * Passes through two arguments:
     * - The draw block highlight event's position
     * - The draw block highlight event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'drawBlockHighlight', method: DrawBlockHighlightFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs after the game loads.
     *
     * This runs after the initial loading of the game directly after scripts are
     * loaded and after "/ct loadExtra" happens.
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'gameLoad', method: () => void): OnRegularTrigger;

    /**
     * Registers a new trigger that runs before the game unloads.
     *
     * This runs before shutdown of the JVM and before "/ct loadExtra" happens.
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'gameUnload', method: () => void): OnRegularTrigger;

    /**
     * Registers a new trigger that runs before a mouse button is being pressed or released.
     *
     * Passes through four arguments:
     * - The mouse x position
     * - The mouse y position
     * - The mouse button
     * - The mouse button state (true if button is pressed, false otherwise)
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'clicked', method: ClickedFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs while a mouse button is being held down.
     *
     * Passes through five arguments:
     * - The mouse delta x position (relative to last frame)
     * - The mouse delta y position (relative to last frame)
     * - The mouse x position
     * - The mouse y position
     * - The mouse button
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'dragged', method: DraggedFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs when a new gui is first opened.
     *
     * Passes through one argument:
     * - The gui opened event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'guiOpened', method: GuiOpenedFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs before a screenshot is taken.
     *
     * Passes through two arguments:
     * - The name of the screenshot
     * - The screenshot event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'screenshotTaken', method: ScreenshotTakenFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs before an item is picked up.
     *
     * Passes through five arguments:
     * - The `Item` that is picked up
     * - The `PlayerMP` that picked up the item
     * - The item's position vector
     * - The item's motion vector
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'pickupItem', method: PickupItemFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs before an item is dropped.
     *
     * Passes through five arguments:
     * - The `Item` that is dropped up
     * - The `PlayerMP` that dropped the item
     * - The item's position vector
     * - The item's motion vector
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'dropItem', method: DropItemFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs before a message is sent in chat.
     *
     * Passes through two arguments:
     * - The message
     * - The message event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'messageSent', method: MessageSentFunc): OnRegularTrigger;

    /**
     * Registers a new trigger that runs when a tooltip is being rendered.
     * This allows for the user to modify what text is in the tooltip, and even the
     * ability to cancel rendering completely.
     *
     * Passes through three arguments:
     * - The list of lore to modify.
     * - The `Item` that this lore is attached to.
     * - The cancellable event.
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'itemTooltip', method: ItemTooltipFunc): void;

    /**
     * Registers a new trigger that runs before the player interacts.
     *
     * In 1.8.9, the following events will activate this trigger:
     * - Left clicking a block
     * - Right clicking a block
     * - Right clicking the air
     *
     * In 1.12.2, the following events will activate this trigger:
     * - Left clicking a block
     * - Left clicking air
     * - Right clicking an entity
     * - Right clicking a block
     * - Right clicking an item
     * - Right clicking air
     *
     * Passes through three arguments:
     * - The `ClientListener.PlayerInteractAction`
     * - The position of the target as a `Vector3d`
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'playerInteract', method: PlayerInteractFunc): void;

    /**
     * Registers a new trigger that runs as a gui is rendered
     *
     * Passes through three arguments:
     * - The mouse x position
     * - The mouse y position
     * - The gui
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'guiRender', method: GuiRenderFunc): void;

    /**
     * Registers a new trigger that runs whenever a key is typed with a gui open
     *
     * Passes through four arguments:
     * - The character pressed (eg. `d`)
     * - The key code pressed (eg. `41`)
     * - The gui
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'guiKey', method: GuiKeyFunc): void;

    /**
     * Registers a new trigger that runs whenever the mouse is clicked with a
     * gui open
     *
     * Passes through five arguments:
     * - The mouse x position
     * - The mouse y position
     * - The mouse button
     * - The gui
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'guiMouseClick', method: GuiMouseClickFunc): void;

    /**
     * Registers a new trigger that runs whenever a mouse button is released
     * with a gui open
     *
     * Passes through five arguments:
     * - The mouse x position
     * - The mouse y position
     * - The mouse button
     * - The gui
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'guiMouseRelease', method: GuiMouseReleaseFunc): void;

    /**
     * Registers a new trigger that runs whenever a mouse button held and dragged
     * with a gui open
     *
     * Passes through five arguments:
     * - The mouse x position
     * - The mouse y position
     * - The mouse button
     * - The gui
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'guiMouseDrag', method: GuiMouseDragFunc): void;

    /**
     * Registers a new trigger that runs whenever the user clicks on a clickable
     * chat component
     *
     * Passes through two arguments:
     * - The `TextComponent`
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'chatComponentClicked', method: ChatComponentClickedFunc): void;

    /**
     * Registers a new trigger that runs whenever the user hovers over a
     * hoverable chat component
     *
     * Passes through two arguments:
     * - The `TextComponent`
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'chatComponentHovered', method: ChatComponentHoveredFunc): void;

    /**
     * Registers a new trigger that runs whenever a packet is sent to the client
     *
     * Passes through two arguments:
     * - The packet
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'packetSent', method: PacketSentFunc): void;

    /**
     * Registers a new trigger that runs when a player joins the world.
     *
     * Maximum is one per tick. Any extras will queue and run in later ticks.
     * This trigger is asynchronous.
     *
     * Passes through one argument:
     * - The `PlayerMP` object
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'playerJoined', method: PlayerJoinedFunc): void;

    /**
     * Registers a new trigger that runs when a player leaves the world.
     *
     * Maximum is one per tick. Any extras will queue and run in later ticks.
     * This trigger is asynchronous.
     *
     * Passes through one argument:
     * - The name of the player that left
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'playerLeft', method: PlayerLeftFunc): void;

    /**
     * Registers a new trigger that runs before a noteblock is played.
     *
     * Passes through four arguments:
     * - The note block play event's Vector3d position
     * - The note block play event's note's name
     * - The note block play event's octave
     * - The note block play event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'noteBlockPlay', method: NoteBlockPlayFunc): void;

    /**
     * Registers a new trigger that runs before a noteblock is changed.
     *
     * Passes through four arguments:
     * - The note block change event's Vector3d position
     * - The note block change event's note's name
     * - The note block change event's octave
     * - The note block change event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'noteBlockChange', method: NoteBlockChangeFunc): void;

    /**
     * Registers a trigger that runs before the world loads.
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'worldLoad', method: () => void): void;

    /**
     * Registers a new trigger that runs before the world unloads.
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'worldUnload', method: () => void): void;

    /**
     * Registers a new trigger that runs before the player breaks a block
     *
     * Passes through three arguments:
     * - The block
     * - The player who broke the block
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'blockBreak', method: BlockBreakFunc): void;

    /**
     * Registers a new trigger that runs whenever a particle is spawned
     *
     * Passes through three arguments:
     * - The `Particle`
     * - The `EnumParticleTypes`
     * - The event, which can be cancelled
     *
     * Available modifications:
     * - `OnTrigger.setPriority` Sets the priority
     *
     * @param method The name of the method to callback when the event is fired
     * @return The trigger for additional modification
     */
    (triggerType: 'spawnParticle', method: SpawnParticleFunc): void;
}

declare interface TriggerRegister {
    /**
     * Helper method to register a trigger.
     *
     * Called by taking the original name of the method, i.e. `registerChat`,
     * removing the word register, and comparing it case-insensitively with
     * the methods below.
     *
     * @param triggerType the type of trigger
     * @param method The name of the method or the actual method to callback when the event is fired
     * @return The trigger for additional modification
     */
    register: IRegisterFunction;
}

declare const TriggerRegister: TriggerRegister;

/**
 * Helper method to register a trigger.
 *
 * Called by taking the original name of the method, i.e. `registerChat`,
 * removing the word register, and comparing it case-insensitively with
 * the methods below.
 *
 * @param triggerType the type of trigger
 * @param method The name of the method or the actual method to callback when the event is fired
 * @return The trigger for additional modification
 */
declare const register: IRegisterFunction;
//#endregion

//#endregion

///////////////
// LIBRARIES //
///////////////
//#region Libraries

interface ChatLib {
    /**
     * Prints text in the chat.
     * The text can be a String, a `Message` or a `TextComponent`
     *
     * @param text the text to be printed
     */
    chat(text: any): void;

    /**
     * Shows text in the action bar.
     * The text can be a String, a `Message` or a `TextComponent`
     *
     * @param text the text to show
     */
    actionBar(text: any): void;

    /**
     * Simulates a chat message to be caught by other triggers for testing.
     * The text can be a String, a `Message` or a `TextComponent`
     *
     * @param message The message to simulate
     */
    simulateChat(text: any): void;

    /**
     * Says chat message.
     * This message is actually sent to the server.
     *
     * @param text the message to be sent
     */
    say(text: string): void;

    /**
     * Runs a command.
     *
     * @param text the command to run, without the leading slash (Ex. "help")
     */
    command(text: string): void;

    clearChat(): void;

    /**
     * Clear chat messages with the specified message ID
     *
     * @param chatLineIDs the id(s) to be cleared
     */
    clearChat(...chatLinIDs: Int[]): void;

    /**
     * Get a message that will be perfectly one line of chat,
     * the separator repeated as many times as necessary.
     * The separator defaults to "-"
     *
     * @param separator the message to split chat with
     * @return the message that would split chat
     */
    getChatBreak(separator?: string): string;

    /**
     * Gets the width of Minecraft's chat
     *
     * @return the width of chat
     */
    getChatWidth(): Int;

    /**
     * Remove all formatting
     *
     * @param text the string to un-format
     * @return the unformatted string
     */
    removeFormatting(text: string): string;

    /**
     * Replaces Minecraft formatted text with normal formatted text
     *
     * @param text the formatted string
     * @return the unformatted string
     */
    replaceFormatting(text: string): string;

    /**
     * Get a message that will be perfectly centered in chat.
     *
     * @param text the text to be centered
     * @return the centered message
     */
    getCenteredText(text: string): string;

    /**
     * Edits an already sent chat message by regex.
     * If the JavaScript RegExp object passed in matches a message, it will be replaced.
     * The regex object will be created by the `new RegExp()` constructor,
     * or the `//` regex literal. All flags will be respected.
     *
     * @param regexp the regex object to match to the message
     * @param replacements the new message(s) to be put in replace of the old one
     */
    editChat(regexp: RegExp, ...replacements: Message[]): void;

    /**
     * Edits an already sent chat message by the text of the chat
     *
     * @param toReplace the unformatted text of the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    editChat(toReplace: string, ...replacements: Message[]): void;

    /**
     * Edits an already sent chat message by the Message
     *
     * @param toReplace the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    editChat(toReplace: Message, ...replacements: Message[]): void;

    /**
     * Edits an already sent chat message by its chat line id
     *
     * @param chatLineId the chat line id of the message to be replaced
     * @param replacements the new message(s) to be put in place of the old one
     */
    editChat(chatLineId: Int, ...replacements: Message[]): void;

    /**
     * Edits an already sent chat message.
     * Whether each specific message is edited or not is up to the first parameter, the "comparator" function.
     * This function will be passed a `@link Message` object and has to return a boolean for whether or not
     * that specific message should be edited. (true for yes, false for no). There are overrides of this function
     * that already implement different versions of this method and those should be used in place of this one
     * if there is already a suitable replacement. Otherwise, create one and use this method.
     *
     * @param toReplace the "comparator" function
     * @param replacements the replacement messages
     */
    editChat(toReplace: (message: Message) => boolean, ...replacements: Message[]): void;

    /**
     * Gets the previous 1000 lines of chat
     *
     * @return A list of the last 1000 chat lines
     */
    getChatLines(): string[];

    /**
     * Get the text of a chat event.
     * Defaults to the unformatted version.
     *
     * @param event     The chat event passed in by a chat trigger
     * @param formatted If true, returns formatted text. Otherwise, returns
     * unformatted text
     * @return The text of the event
     */
    getChatMessage(event: Event, formatted?: boolean): string;

    /**
     * Replaces the easier to type '&amp;' color codes with proper color codes in a string.
     *
     * @param message The string to add color codes to
     * @return the formatted message
     */
    addColor(message?: string): string;
}

declare const ChatLib: ChatLib;

interface EventLib {
    getButtonState(event: MouseEvent): boolean;
    getType(event: ObfClientChatReceivedEvent): Int;
    getMessage(event: ObfClientChatReceivedEvent): ObfIChatComponent;
    getName(event: ObfPlaySoundEvent): string;
    getModId(event: ObfOnConfigChangedEvent): string;
    cancel(event: CallbackInfoReturnable | ObfPlaySoundEvent | CancellableEvent): void;
}

declare const EventLib: EventLib;

interface Renderer {
    BLACK: Int;
    DARK_BLUE: Int;
    DARK_GREEN: Int;
    DARK_AQUA: Int;
    DARK_RED: Int;
    DARK_PURPLE: Int;
    GOLD: Int;
    GRAY: Int;
    DARK_GRAY: Int;
    BLUE: Int;
    GREEN: Int;
    AQUA: Int;
    RED: Int;
    LIGHT_PURPLE: Int;
    YELLOW: Int;
    WHITE: Int;

    getColor(color: Int): Int;
    getFontRenderer(): ObfFontRenderer;
    getStringWidth(text: string, removeFormatting?: boolean): Int;
    color(red: Int, green: Int, blue: Int, alpha?: Int): Int;
    getRainbow(step: Float, speed?: Float): Int;
    getRainbowColors(step: Float, speed?: Float): Int[];
    retainsTransform(retain: boolean): void;
    translate(x: Float, y: Float, z?: Float): void;
    scale(scaleX: Float, scaleY?: Float): void;
    rotate(angle: Float): void;
    colorize(red: Float, green: Float, blue: Float, alpha?: Float): void;
    setDrawMode(drawMode: Int): this;
    getDrawMode(): Int;
    fixAlpha(color: Int): Int;
    drawRect(color: Int, x: Float, y: Float, width: Float, height: Float): void;
    drawShape(color: Int, ...vertices: Float[], drawMode?: Int): void;
    drawLine(color: Int, x1: Float, y1: Float, x2: Float, y2: Float, thickness: Float, drawMode?: Int): void;
    drawCircle(color: Int, x: Float, y: Float, radius: Float, steps: Int, drawMode?: Int): void;
    drawString(text: string, x: Float, y: Float): void;
    drawStringWithShadow(text: string, x: Float, y: Float): void;
    drawImage(image: Image, x: Double, y: Double, width: Double, height: Double): void;
    drawPlayer(player: any, x: Int, y: Int, rotate: boolean): void;

    screen: {
        getWidth(): Int;
        getHeight(): Int;
        getScale(): Int;
    }
}

declare const Renderer: Renderer;

declare class Shape {
    constructor(color: Int);

    copy(): Shape;
    clone(): Shape;
    getColor(): Int;
    setColor(color: Int): this;
    getDrawMode(): Int;

    /**
     * Sets the GL draw mode of the shape. Possible draw modes are:
     * - `0`: points
     * - `1`: lines
     * - `2`: line loop
     * - `3`: line strip
     * - `4`: triangles
     * - `5`: triangle strip
     * - `6`: triangle fan
     * - `7`: quads
     * - `8`: quad strip
     * - `9`: polygon
     */
    setDrawMode(drawMode: Int): this;

    getVertexes(): Vector2f[];
    addVertex(x: Float, y: Float): this;
    insertVertex(index: Int, x: Float, y: Float): this;
    removeVertex(index: Int): this;

    /**
     * Sets the shape as a line pointing from `(x1, y1)` to `(x2, y2)` with a thickness
     */
    setLine(x1: Float, y1: Float, x2: Float, y2: Float, thickness: Float): this;

    /**
     * Sets the shape as a circle with a center at `(x, y)`
     * with radius and number of steps around the circle
     */
    setCircle(x: Float, y: Float, radius: Float, steps: Int): this;

    draw(): this;
}

declare class Rectangle {
    constructor(color: Int, x: Float, y: Float, width: Float, height: Float);

    getColor(): Int;
    setColor(color: Int): this;
    getX(): Float;
    setX(x: Float): this;
    getY(): Float;
    setY(y: Float): this;
    getWidth(): Float;
    setWidth(width: Float): this;
    getHeight(): Float;
    setHeight(height: Float): this;
    isShadow(): boolean;
    setShadow(shadow: boolean): this;
    getShadowOffset(): Vector2f;
    getShadowOffsetX(): Float;
    getShadowOffsetY(): Float;
    setShadowOffset(x: Float, y: Float): this;
    setShadowOffsetX(x: Float): this;
    setShadowOffsetY(y: Float): this;
    getShadowColor(): Int;
    setShadowColor(color: Int): this;
    getOutline(): boolean;
    setOutline(outline: boolean): this;
    getOutlineColor(): Int;
    setOutlineColor(color: Int): this;
    getThickness(): Float;
    setThickness(thickness: Float): this;
    setOutline(color: Int, thickness: Float): this;
    draw(): this;
}

declare class Text {
    constructor(text: string, x?: Float, y?: Float);

    getString(): string;
    setString(text: string): this;
    getColor(): Int;
    setColor(color: Int): this;
    getFormatted(): boolean;
    setFormatted(formatted: boolean): this;
    getShadow(): boolean;
    setShadow(shadow: boolean): this;
    getAlign(): DisplayHandler.Align;
    setAlign(align: DisplayHandlerAlign): this;
    getX(): Float;
    setX(x: Float): this;
    getY(): Float;
    setY(y: Float): this;
    getWidth(): Int;
    setWidth(width: Int): this;
    getLines(): string[];
    getMaxLines(): Int;
    setMaxLines(maxLines: Int): this;
    getScale(): Float;
    setScale(scale: Float): this;
    getMaxWidth(): Int;
    getHeight(): Float;
    exceedsMaxLines(): boolean;
    draw(x?: Float, y?: Float): this;
}

declare class Image {
    constructor(image?: any); // TODO: BufferedImage
    constructor(name: string, url?: string);

    getTextureWidth(): Int;
    getTextureHeight(): Int;
    getTexture(): any; // TODO: DynamicTexture
    draw(x: Double, y: Double, width?: Double, height?: Double): this;
}

interface Tessellator {
    /**
     * Binds a texture to the client for the Tessellator to use.
     *
     * @param texture the texture to bind
     * @return the Tessellator to allow for method chaining
     */
    bindTexture(texture: Image): this;

    /**
     * Begin drawing with the Tessellator
     * with default draw mode of quads and textured
     *
     * @param drawMode the GL draw mode
     * @param textured if the Tessellator is textured
     * @return the Tessellator to allow for method chaining
     * @see `Shape#setDrawMode(int)`
     */
    begin(drawMode?: Int, textured?: boolean): this;

    /**
     * Colorize the Tessellator.
     *
     * @param red   the red value between 0 and 1
     * @param green the green value between 0 and 1
     * @param blue  the blue value between 0 and 1
     * @param alpha the alpha value between 0 and 1
     * @return the Tessellator to allow for method chaining
     */
    colorize(red: Float, green: Float, blue: Float, alpha?: Float): this;

    /**
     * Rotates the Tessellator in 3d space.
     * Similar to `Renderer#rotate(float)`
     *
     * @param angle the angle to rotate
     * @param x     if the rotation is around the x axis
     * @param y     if the rotation is around the y axis
     * @param z     if the rotation is around the z axis
     * @return the Tessellator to allow for method chaining
     */
    rotate(angle: Float, x: Float, y: Float, z: Float): this;

    /**
     * Translates the Tessellator in 3d space.
     * Similar to `Renderer.translate`
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the Tessellator to allow for method chaining
     */
    translate(x: Float, y: Float, z: Float): this;

    /**
     * Scales the Tessellator in 3d space.
     * Similar to `Renderer.scale`
     *
     * @param x scale in the x direction or all directions if y and z are not supplied
     * @param y scale in the y direction
     * @param z scale in the z direction
     * @return the Tessellator to allow for method chaining
     */
    scale(x: Float, y?: Float, z?: Float): this;

    /**
     * Sets a new vertex in the Tessellator.
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the Tessellator to allow for method chaining
     */
    pos(x: Float, y: Float, z: Float): this;

    /**
     * Sets the texture location on the last defined vertex.
     * Use directly after using `Tessellator.pos`
     *
     * @param u the u position in the texture
     * @param v the v position in the texture
     * @return the Tessellator to allow for method chaining
     */
    tex(u: Float, v: Float): this;

    /**
     * Finalizes and draws the Tessellator.
     */
    draw(): this;

    /**
     * Renders floating lines of text in the 3D world at a specific position.
     *
     * @param text           The string array of text to render
     * @param x              X coordinate in the game world
     * @param y              Y coordinate in the game world
     * @param z              Z coordinate in the game world
     * @param renderBlackBox render a pretty black border behind the text
     * @param partialTicks   the partial ticks of the current render pass, passed in through the world render trigger
     * @param scale          the scale of the text
     * @param color          the color of the text
     * @param increase       whether or not to scale the text up as the player moves away
     */
    drawString(text: string, x: Float, y: Float, z: Float, renderBlackBox: boolean, partialTicks: Float, scale: Float, color: Int, increase: boolean): void;
}

declare const Tessellator: Tessellator;

interface FileLib {
    /**
     * Writes a file to folder in modules.
     *
     * @param importName name of the import
     * @param fileName   name of the file
     * @param toWrite    string to write in file
     */
    write(importName: string, fileName: string, toWrite: string): void;

    /**
     * Writes a file to anywhere on the system.
     * Use "./" for the ".minecraft" folder.
     *
     * @param fileLocation the location and file name
     * @param toWrite      string to write in file
     */
    write(fileLocation: string, toWrite: string): void;

    /**
     * Reads a file from folder in modules.<br></br>
     * Returns an empty string if file is not found.
     *
     * @param importName name of the import
     * @param fileName   name of the file
     * @return the string in the file
     */
    read(importName: string, fileName: string): string | null;

    /**
     * Reads a file from anywhere on the system.<br></br>
     * Use "./" for the ".minecraft" folder.<br></br>
     * Returns an empty string if file is not found.
     *
     * @param fileLocation the location and file name
     * @return the string in the file
     */
    read(fileLocation: string): string | null;

    /**
     * Reads a file from anywhere on the system using java.io.File.
     *
     * @param file the java.io.File to loadExtra
     * @return the string in the file
     */
    read(file: any /* TODO: File */): string | null;

    /**
     * Gets the contents of a url as a string.
     *
     * @param theUrl the url to get the data from
     * @param userAgent the user agent to use in the connection
     * @return the string stored in the url content
     */
    getUrlContent(theUrl: string, userAgent?: string): string;

    deleteDirectory(dir: any /* TODO: File */): boolean;

    /**
     * Extracts a zip file specified by the zipFilePath to a directory specified by
     * destDirectory (will be created if does not exists).
     *
     * @param zipFilePath the zip file path
     * @param destDirectory the destination directory
     * @throws IOException IOException
     */
    unzip(zipFilePath: string, destDirectory: string): void;
}

declare const FileLib: FileLib;

interface MathLib {
    /**
     * Maps a number from one range to another.
     *
     * @param number  the number to map
     * @param in_min  the original range min
     * @param in_max  the original range max
     * @param out_min the final range min
     * @param out_max the final range max
     * @return the re-mapped number
     */
    map(number: Float, inMin: Float, inMax: Float, outMin: Float, outMax: Float): Float;

    /**
     * Clamps a floating number between two values.
     *
     * @param number the number to clamp
     * @param min    the minimum
     * @param max    the maximum
     * @return the clamped number
     */
    clampFloat(number: Float, min: Float, max: Float): Float;

    /**
     * Clamps an integer number between two values.
     *
     * @param number the number to clamp
     * @param min    the minimum
     * @param max    the maximum
     * @return the clamped number
     */
    clamp(number: Int, min: Int, max: Int): Int;
}

declare const MathLib: MathLib;

declare class XMLHttpRequest {
    status: Int | null;
    statusText: string | null;
    responseText: string | null;
    extras: {
        [index: string]: any;
    }

    open(method: string, urlStr: string, async: boolean): void;
    addRequestHeader(key: string, value: string): void;
    setCallbackMethod(method: string | (() => void)): void;
    send(): void;
    send(...parameters: string[]): void;
    getResponseHeader(headerName: string): string | null;
}

//#endregion

////////////////
// CT OBJECTS //
////////////////
//#region CT Objects

namespace DisplayHandler {
    declare function registerDisplay(display: Display): boolean;
    declare function clearDisplays(): void;

    declare enum Background {
        NONE = 'NONE', FULL = 'FULL', PER_LINE = 'PER_LINE'
    }

    declare enum Align {
        NONE = 'NONE', LEFT = 'LEFT', CENTER = 'CENTER', RIGHT = 'RIGHT'
    }

    declare enum Order {
        UP = 'UP', DOWN = 'DOWN'
    }
}

type DisplayHandlerBackground = DisplayHandler.Background | keyof typeof DisplayHandler.Background;
type DisplayHandlerAlign = DisplayHandler.Align | keyof typeof DisplayHandler.Align;
type DisplayHandlerOrder = DisplayHandler.Order | keyof typeof DisplayHandler.Order;

interface IDisplayProps {
    shouldRender?: boolean;
    renderX?: Float;
    renderY?: Float;
    backgroundColor?: Int;
    textColor?: Int;
    align?: DisplayHandler.Align;
    order?: DisplayHandler.Order;
}

declare class Display {
    constructor();
    constructor(props: IDisplayProps);

    getBackgroundColor(): Int;
    setBackgroundColor(color: Int): this
    getTextColor(): Int;
    setTextColor(color: Int): this;
    getBackground(): DisplayHandler.Background;
    setBackground(background: DisplayHandlerBackground): this;
    getAlign(): DisplayHandler.Align;
    setAlign(align: DisplayHandlerAlign): this;
    getOrder(): DisplayHandler.Order;
    setOrder(order: DisplayHandlerOrder): this;
    setLine(index: Int, line: string | DisplayLine): this;
    getLine(index: Int): DisplayLine;
    getLines(): DisplayLine[];
    setLines(lines: DisplayLine[]): this;
    addLine(line: DisplayLine): void;
    addLine(index: Int, line: DisplayLine): void;
    addLines(...lines: Array<string | DisplayLine>): this;
    clearLines(): this;
    getRenderX(): Float;
    setRenderX(renderX: Float): this;
    getRenderY(): Float;
    setRenderY(renderY: Float): this;
    setRenderLoc(renderX: Float, renderY: Float): this;
    getShouldRender(): boolean;
    setShouldRender(shouldRender: boolean): this;
    getWidth(): Float;
    getHeight(): Float;
    getMinWidth(): Float;
    setMinWidth(minWidth: Float): this;
    render(): void;
    toString(): string;
}

interface IDisplayLineProps {
    textColor?: Int;
    backgroundColor?: Int;
    align?: DisplayHandler.Align | keyof typeof DisplayHandler.Align;
    background?: DisplayHandler.Background | keyof typeof DisplayHandler.Background;
}

declare class DisplayLine {
    constructor(text: string, config?: IDisplayLineProps);

    getText(): Text;
    setText(text: Text): this;
    getTextColor(): Int;
    setTextColor(color: Int): this;
    getTextWidth(): Float;
    setShadow(shadow: boolean): this;
    setScale(scale: Float): this;
    getAlign(): DisplayHandler.Align;
    setAlign(align: DisplayHandlerAlign): this;
    getBackground(): DisplayHandler.Background;
    setBackground(background: DisplayHandlerBackground): this;
    getBackgroundColor(): Int;
    setBackgroundColor(color: Int): this;
    registerClicked(func: (mouseX: Float, mouseY: Float, mouseButton: Int, isButtonDown: boolean) => void): OnRegularTrigger;
    registerHovered(func: (mouseX: Float, mouseY: Float) => void): OnRegularTrigger;
    registerDragged(func: (deltaMouseX: Float, deltaMouseY: Float, mouseX: Float, mouseY: Float, mouseButton: Int) => void): OnRegularTrigger;
    drawLeft(x: Float, y: Float, maxWidth: Float, background: DisplayHandler.Background, backgroundColor: Int, textColor: Int): void;
    drawRight(x: Float, y: Float, maxWidth: Float, background: DisplayHandler.Background, backgroundColor: Int, textColor: Int): void;
    drawCenter(x: Float, y: Float, maxWidth: Float, background: DisplayHandler.Background, backgroundColor: Int, textColor: Int): void;
    toString(): string;
}

declare class Gui {
    doesPauseGame: boolean;

    open(): void;
    close(): void;
    isOpen(): boolean;
    isControlDown(): boolean;
    isShiftDown(): boolean;
    isAltDown(): boolean;

    /**
     * Registers a method to be ran while gui is open. Registered
     * method runs on draw.
     *
     * Arguments passed through to method:
     * - mouseX
     * - mouseY
     * - partialTicks
     *
     * @param method the method to run
     * @return the trigger
     */
    registerDraw(func: (mouseX: Int, mouseY: Int, partialTicks: Float) => void): OnRegularTrigger;

    /**
     * Registers a method to be ran while gui is open. Registered
     * method runs on mouse click.
     *
     * Arguments passed through to method:
     * - mouseX
     * - mouseY
     * - button
     *
     * @param method the method to run
     * @return the trigger
     */
    registerClicked(func: (mouseX: Int, mouseY: Int, mouseButton: Int) => void): OnRegularTrigger;

    /**
     * Registers a method to be ran while gui is open. Registered
     * method runs on key input.
     *
     * Arguments passed through to method:
     * - typed character
     * - key code
     *
     * @param method the method to run
     * @return the trigger
     */
    registerKeyTyped(func: (character: char, keyCode: Int) => void): OnRegularTrigger;

    /**
     * Registers a method to be ran while gui is open. Registered
     * method runs on key input.
     *
     * Arguments passed through to method:
     * - mouseX
     * - mouseY
     * - the mouse button clicked
     * - the time since last click, in milliseconds
     *
     * @param method the method to run
     * @return the trigger
     */
    registerMouseDragged(func: (mouseX: Int, mouseY: Int, mouseButton: Int, timeSinceLastClick: Long) => void): OnRegularTrigger;

    /**
     * Registers a method to be ran while gui is open. Registered
     * method runs on mouse release.
     *
     * Arguments passed through to method:
     * - mouseX
     * - mouseY
     * - mouse button
     *
     * @param method the method to run
     * @return the trigger
     */
    registerMouseReleased(func: (mouseX: Int, mouseY: Int, mouseButton: Int) => void): OnRegularTrigger;

    /**
     * Registers a method to be ran while gui is open. Registered
     * method runs when an action is performed (clicking a button)
     *
     * Arguments passed through to method:
     * - the button that is clicked
     *
     * @param method the method to run
     * @return the trigger
     */
    registerActionPerformed(func: (button: int) => void): OnRegularTrigger;

    /**
     * Add a base Minecraft button to the gui
     *
     * @param buttonId   id for the button
     * @param x          X position of the button
     * @param y          Y position of the button
     * @param buttonText the label of the button
     */
    addButton(buttonId: Int, x: Int, y: Int, buttonText: string): void;

    /**
     * Add a base Minecraft button to the gui
     *
     * @param buttonId   id for the button
     * @param x          X position of the button
     * @param y          Y position of the button
     * @param width      the width of the button
     * @param height     the height of the button
     * @param buttonText the label of the button
     */
    addButton(buttonId: Int, x: Int, y: Int, width: Int, height: Int, buttonText: string): void;

    setButtonVisibility(buttonId: Int, visible: boolean): void;
}

declare class Message {
    /**
     * Creates a new Message object from a chat event.
     *
     * @param event the chat event
     */
    constructor(event: ObfClientChatReceivedEvent);

    /**
     * Creates a new Message object from an IChatComponent.
     *
     * @param component the IChatComponent
     */
    constructor(component: ObfIChatComponent);

    /**
     * Creates a new Message object in parts of TextComponents or Strings.
     *
     * @param messageParts the list of TextComponents or Strings
     */
    constructor(messageParts: Array<string | TextComponent>);

    /**
     * Creates a new Message object in parts of TextComponents or Strings.
     *
     * @param components the TextComponents or Strings
     */
    constructor(...messageParts: Array<string | TextComponent>);

    getChatMessage(): ObfIChatComponent;

    /**
     * Gets the message TextComponent parts as a list.
     *
     * @return the message parts
     */
    getMessageParts(): TextComponent[];

    getChatLineId(): Int;
    setChatLineId(id: Int): this;
    isRecursive(): boolean;
    setRecursive(recursive: boolean): this;
    isFormatted(): boolean;
    setFormatted(formatted: boolean): this;

    /**
     * Sets the TextComponent or String in the Message at index.
     *
     * @param index    the index of the TextComponent or String to change
     * @param component the new TextComponent or String to replace with
     * @return the Message for method chaining
     */
    setTextComponent(index: Int, component: string | TextComponent): this;

    /**
     * Adds a TextComponent or String to the end of the Message.
     *
     * @param component the new TextComponent or String to add
     * @return the Message for method chaining
     */
    addTextComponent(component: string | TextComponent): this;

    /**
     * Adds a TextComponent or String at index of the Message.
     *
     * @param index the index to insert the new TextComponent or String
     * @param component the new TextComponent or String to insert
     * @return the Message for method chaining
     */
    addTextComponent(index: Int, component: string | TextComponent): this;

    clone(): this;
    copy(): this;

    /**
     * Edits this message (once it is already sent)
     *
     * @param replacements the new message(s) to be put in place of the old one
     */
    edit(...replacements: Message): void;

    /**
     * Outputs the Message into the client's chat.
     */
    chat(): void;

    /**
     * Outputs the Message into the client's action bar.
     */
    actionBar(): void;

    toString(): string;
}

type ClickEventAction = 'OPEN_URL' | 'OPEN_FILE' | 'RUN_COMMAND' | 'TWITCH_USER_INFO' | 'SUGGSET_COMMAND' | 'CHANGE_PAGE';
type HoverEventAction = 'SHOW_TEXT' | 'SHOW_ACHIEVEMENT' | 'SHOW_ITEM' | 'SHOW_ENTITY';

declare class TextComponent {
    chatComponentText: ObfIChatComponent;

    constructor(text: string);
    constructor(component: ObfIChatComponent);

    getText(): string;
    setText(text: string): this;
    isFormatted(): boolean;
    setFormatted(formatted: boolean): this;
    setClick(action: ClickEventAction, value: string): this;
    getClickAction(): ClickEventAction | null;
    setClickAction(action: ClickEventAction): this;
    getClickValue(): string | null;
    setClickValue(value: string): this;
    setHover(action: HoverEventAction, value: string): this;
    getHoverAction(): HoverEventAction | null;
    setHoverAction(action: HoverEventAction): this;
    getHoverValue(): string | null;
    setHoverValue(value: string): this;
    chat(): void;
    actionBar(): void;
    toString(): string;
}

declare class Book {
    constructor(bookName: string);

    /**
     * Add a page to the book.
     *
     * @param message the entire message for what the page should be
     * @return the current book to allow method chaining
     */
    addPage(message: Message): this;

    /**
     * Overloaded method for adding a simple page to the book.
     *
     * @param message a simple string to make the page
     * @return the current book to allow method chaining
     */
    addPage(message: string): this;

    /**
     * Sets a page of the book to the specified message.
     *
     * @param pageNumber the number of the page to set
     * @param message    the message to set the page to
     * @return the current book to allow method chaining
     */
    setPage(pageNumber: Int, message: Message): this;

    updateBookScreen(pages: ObfNBTTagList): void;
    display(page?: Int): void;
    isOpen(): boolean;
    getCurrentPage(): Int;
}

declare class KeyBind {
    /**
     * Creates a new key bind, editable in the user's controls.
     *
     * @param description what the key bind does
     * @param keyCode     the keycode which the key bind will respond to, see Keyboard below. Ex. Keyboard.KEY_A
     * @see [Keyboard](http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html)
     */
    constructor(description: string, keyCode: Int);

    constructor(keyBinding: ObfKeyBinding);

    /**
     * Returns true if the key is pressed (used for continuous querying).
     *
     * @return whether or not the key is pressed
     */
    isKeyDown(): boolean;

    /**
     * Returns true on the initial key press. For continuous querying use .isKeyDown.
     *
     * @return whether or not the key has just been pressed
     */
    isPressed(): boolean;

    /**
     * Gets the key code of the key.
     *
     * @return the integer key code
     */
    getKeyCode(): Int;

    /**
     * Sets the state of the key.
     *
     * @param pressed True to press, False to release
     */
    setState(pressed: boolean): void;

    static clearKeyBinds();
}

declare class Image {
    constructor(image: BufferedImage);
    constructor(name: string, url?: string);

    getTextureWidth(): Int;
    getTextureHeight(): Int;
    getTexture(): ObfDynamicTexture;
    draw(x: Double, y: Double, width?: Double, height?: Double): this;
}

type SoundAttentuation = 0 | 1 | 2;

interface ISoundProps {
    source: string;
    priority?: boolean;
    loop?: boolean;
    stream?: boolean;
    category?: SoundCategoryStrings;
    volume?: Float;
    pitch?: Float;
    x?: Float;
    y?: Float;
    z?: Float;
    attenuation?: SoundAttentuation;
}

declare class Sound {
    /**
     * Instances a new Sound with certain properties. These properties
     * should be passed through as a normal JavaScript object.
     *
     * REQUIRED:
     * - source (String) - filename, relative to ChatTriggers assets directory
     *
     * OPTIONAL:
     * - priority (boolean) - whether or not this sound should be prioritized, defaults to false
     * - loop (boolean) - whether or not to loop this sound over and over, defaults to false
     * - stream (boolean) - whether or not to stream this sound rather than preload it (should be true for large files), defaults to false
     *
     * CONFIGURABLE (can be set in config object, or changed later, but MAKE SURE THE WORLD HAS LOADED):
     * - category (String) - which category this sound should be a part of, see `setCategory(String)`.
     * - volume (float) - volume of the sound, see `setVolume(float)`
     * - pitch (float) - pitch of the sound, see `setPitch(float)`
     * - x, y, z (float) - location of the sound, see `setPosition(float, float, float)`. Defaults to the players position.
     * - attenuation (int) - fade out model of the sound, see `setAttenuation(int)`
     *
     * @param config the JavaScript config object
     */
    constructor(config: ISoundProps);

    /**
     * Sets the category of this sound, making it respect the Player's sound volume sliders.
     *
     * @param category the category
     */
    setCategory(category: SoundCategoryStrings): this;

    /**
     * Sets this sound's volume.
     * Will override the category if called after `setCategory`, but not if called before.
     *
     * @param volume New volume, float value ( 0.0f - 1.0f ).
     */
    setVolume(volume: Float): this;

    /**
     * Updates the position of this sound
     *
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     */
    setPosition(x: Float, y: Float, z: Float): this;

    /**
     * Sets this sound's pitch.
     *
     * @param pitch A float value in the range of (0.5f, 2.0f).
     */
    setPitch(pitch: Float): this;

    /**
     * Sets the attenuation (fade out over space) of the song.
     * Models are:
     *  NONE(0) - no fade
     *  ROLLOFF(1) - this is the default, meant to be somewhat realistic
     *  LINEAR(2) - fades out linearly, as the name implies
     *
     * @param model the model
     */
    setAttenuation(model: SoundAttentuation): this;

    /**
     * Plays/resumes the sound
     */
    play(): void;

    /**
     * Pauses the sound, to be resumed later
     */
    pause(): void;

    /**
     * Completely stops the song
     */
    stop(): void;

    /**
     * Rewinds the song
     */
    rewind(): void;
}

declare class PlayerMP {
    constructor(player: ObfEntityPlayer);

    isSpectator(): boolean;
    getActivePotionEffects(): PotionEffect[];
    getPing(): Int;

    /**
     * Gets the item currently in the player's specified inventory slot.
     * 0 for main hand, 1-4 for armor
     * (2 for offhand in 1.12.2, and everything else shifted over).
     *
     * @param slot the slot to access
     * @return the item in said slot
     */
    getItemInSlot(slot: Int): Item;

    /**
     * Gets the display name for this player,
     * i.e. the name shown in tab list and in the player's nametag.
     * @return the display name
     */
    getDisplayName(): TextComponent;

    setTabDisplayName(name: TextComponent): void;

    /**
     * Sets the name for this player shown above their head,
     * in their name tag
     *
     * @param textComponent the new name to display
     */
    setNametagname(name: TextComponent): void;

    toString(): string;
    getName(): string;
}

//#endregion

/////////////////
// CT WRAPPERS //
/////////////////
//#region

declare interface Client {
    settings: Settings;

    /**
     * Gets Minecraft's Minecraft object
     *
     * @return The Minecraft object
     */
    getMinecraft(): ObfMinecraft;

    /**
     * Gets Minecraft's NetHandlerPlayClient object
     *
     * @return The NetHandlerPlayClient object
     */
    getConnection(): ObfNetHandlerPlayClient;

    /**
     * Gets the Minecraft GuiNewChat object for the chat gui
     *
     * @return The GuiNewChat object for the chat gui
     */
    getChatGUI(): ObfGuiNewChat | null;

    isInChat(): boolean;
    getTabGui(): ObfGuiPlayerTabOverlay | null;
    isInTab(): boolean;

    /**
     * Gets whether or not the Minecraft window is active
     * and in the foreground of the user's screen.
     *
     * @return true if the game is active, false otherwise
     */
    isTabbedIn(): boolean;

    /**
     * Get the `KeyBind` from an already existing
     * Minecraft KeyBinding, otherwise, returns null.
     *
     * @param keyCode the keycode to search for, see Keyboard below. Ex. Keyboard.KEY_A
     * @return the `KeyBind` from a Minecraft KeyBinding, or null if one doesn't exist
     * @see [Keyboard](http://legacy.lwjgl.org/javadoc/org/lwjgl/input/Keyboard.html)
     */
    getKeyBindFromKey(keyCode: Int, description?: string): KeyBind | null;

    /**
     * Get the `KeyBind` from an already existing
     * Minecraft KeyBinding, else, null.
     *
     * @param description the key binding's original description
     * @return the key bind, or null if one doesn't exist
     */
    getKeyBindFromDescription(description: string): KeyBind | null;

    getFPS(): Int;
    getVersion(): string;
    getMaxMemory(): Long;
    getTotalMemory(): Long;
    getFreeMemory(): Long;
    getMemoryUsage(): Int;
    getSystemTime(): Long;
    getMouseX(): Float;
    getMouseY(): Float;
    isInGui(): boolean;

    /**
     * Gets the chat message currently typed into the chat gui.
     *
     * @return A blank string if the gui isn't open, otherwise, the message
     */
    getCurrentChatMessage(): string;

    /**
     * Sets the current chat message, if the chat gui is not open, one will be opened.
     *
     * @param message the message to put in the chat text box.
     */
    setCurrentChatMessage(message: string): void;

    sendPacket(packet: ObfPacket): void;

    gui: {
        /**
         * Gets the Java class name of the currently open gui, for example, "GuiChest"
         *
         * @return the class name of the current gui
         */
        getClassName(): string;

        /**
         * Gets the Minecraft gui class that is currently open
         *
         * @return the Minecraft gui
         */
        get(): ObfGuiScreen | null;

        /**
         * Closes the currently open gui
         */
        close(): void
    }

    camera: {
        getX(): Double;
        getY(): Double;
        getZ(): Double;
    }
}

declare const Client: Client;

declare interface Settings {
    getSettings(): ObfGameSettings;
    getFOV(): Float;
    setFOV(fov: Float): void;
    getDifficulty(): Int;
    setDifficulty(difficulty: 0 | 1 | 2 | 3): void;

    skin: {
        getCape(): boolean;
        setCape(toggled: boolean): void;
        getJacket(): boolean;
        setJacket(toggled: boolean): void;
        getLeftSleeve(): boolean;
        setLeftSleeve(toggled: boolean): void;
        getRightSleeve(): boolean;
        setRightSleeve(toggled: boolean): void;
        getLeftPantsLeg(): boolean;
        setLeftPantsLeg(toggled: boolean): void;
        getRightPantsLeg(): boolean;
        setRightPantsLeg(toggled: boolean): void;
        getHat(): boolean;
        setHat(toggled: boolean): void;
    }

    sound: {
        getMasterVolume(): Float;
        setMasterVolume(volume: Float): void;
        getMusicVolume(): Float;
        setMusicVolume(volume: Float): void;
        getNoteblockVolume(): Float;
        setNoteblockVolume(volume: Float): void;
        getWeather(): Float;
        setWeather(volume: Float): void;
        getBlocks(): Float;
        setBlocks(volume: Float): void;
        getHostileCreatures(): Float;
        setHostileCreatures(volume: Float): void;
        getFriendlyCreatures(): Float;
        setFriendlyCreatures(volume: Float): void;
        getPlayers(): Float;
        setPlayers(volume: Float): void;
        getAmbient(): Float;
        setAmbient(volume: Float): void;
    }

    video: {
        getGraphics(): boolean;
        setGraphics(fancy: boolean): void;
        getRenderDistance(): Int;
        setRenderDistance(distance: Int): void;
        getSmoothLighting(): 0 | 1 | 2;
        setSmoothLighting(level: 0 | 1 | 2): void;
        getMaxFrameRate(): Int;
        setMaxFrameRate(maxFrameRate: Int): void;
        get3dAnaglyph(): boolean;
        set3dAnaglyph(toggled: boolean): void;
        getBobbing(): boolean;
        setBobbing(toggled: boolean): void;
        getGuiScale(): Int;
        setGuiScale(scale: Int): void;
        getBrightness(): Int;
        setBrightness(brightness: Int): void;
        getClouds(): 0 | 1 | 2;
        setClouds(level: 0 | 1 | 2): void;
        getParticles(): 0 | 1 | 2;
        setParticles(level: 0 | 1 | 2): void;
        getFullscreen(): boolean;
        setFullscreen(toggled: boolean): void;
        getVsync(): boolean;
        setVsync(toggled: boolean): void;
        getMipmapLevels(): 0 | 1 | 2 | 3 | 4;
        setMipmapLevels(level: 0 | 1 | 2 | 3 | 4): void;
        getAlternateBlocks(): boolean;
        setAlternateBlocks(togggle: boolean): void;
        getVBOs(): boolean;
        setVBOs(toggled: boolean): void;
        getEntityShadows(): boolean;
        setEntityShadows(toggled: boolean): void;
    }

    chat: {
        getVisibility(): ObfEnumChatVisibility;
        setVisibility(visibility: 'hidden' | 'commands' | 'system' | 'full'): void;
        getColors(): boolean;
        setColors(toggled: boolean): void;
        getWebLinks(): boolean;
        setWebLinks(toggled: boolean): void;
        getOpacity(): Float;
        setOpacity(opacity: Float): void;
        getPromptOnWebLinks(): boolean;
        setPromptOnWebLinks(toggled: boolean): void;
    }
}

declare interface Player {
    /**
     * Gets Minecraft's EntityPlayerSP object representing the user
     *
     * @return The Minecraft EntityPlayerSP object representing the user
     */
    getPlayer(): ObfEntityPlayerSP;

    getX(): Double;
    getY(): Double;
    getZ(): Double;

    /**
     * Gets the player's x motion.
     * This is the amount the player will move in the x direction next tick.
     *
     * @return the player's x motion
     */
    getMotionX(): Double;

    /**
     * Gets the player's y motion.
     * This is the amount the player will move in the y direction next tick.
     *
     * @return the player's y motion
     */
    getMotionY(): Double;

    /**
     * Gets the player's z motion.
     * This is the amount the player will move in the z direction next tick.
     *
     * @return the player's z motion
     */
    getMotionZ(): Double;

    /**
     * Gets the player's camera pitch.
     *
     * @return the player's camera pitch
     */
    getPitch(): Float;

    /**
     * Gets the player's camera yaw.
     *
     * @return the player's camera yaw
     */
    getYaw(): Float;

    /**
     * Gets the player's yaw rotation without wrapping.
     *
     * @return the yaw
     */
    getRawYaw(): Float;

    /**
     * Gets the player's username.
     *
     * @return the player's username
     */
    getName(): string;

    getUUID(): string;
    getHP(): Float;
    getHunger(): Int;
    getSaturation(): Int;
    getArmorPoints(): Int;

    /**
     * Gets the player's air level.
     *
     * The returned value will be an integer. If the player is not taking damage, it
     * will be between 300 (not in water) and 0. If the player is taking damage, it
     * will be between -20 and 0, getting reset to 0 every time the player takes damage.
     *
     * @return the player's air level
     */
    getAirLevel(): Int;

    getXPLevel(): Int;
    getXPProgress(): Int;
    getBiome(): string;

    /**
     * Gets the light level at the player's current position.
     *
     * @return the light level at the player's current position
     */
    getLightLevel(): Int;

    isSneaking(): boolean;
    isSprinting(): boolean;

    /**
     * Checks if player can be pushed by water.
     *
     * @return true if the player is flying, false otherwise
     */
    isFlying(): boolean;

    isSleeping(): boolean;

    /**
     * Gets the direction the player is facing.
     * Example: "South West"
     *
     * @return The direction the player is facing, one of the four cardinal directions
     */
    facing(): 'South' | 'South West' | 'West' | 'North West' | 'North' | 'North East' | 'East' | 'South East';

    getActivePotionEffects(): PotionEffect[];

    /**
     * Gets the current object that the player is looking at,
     * whether that be a block or an entity. Returns an air block when not looking
     * at anything.
     *
     * @return the `Block`, `Sign`, or `Entity` being looked at
     */
    lookingAt(): Block | Sign | Entity;

    getHeldItem(): Item;
    setHeldItemIndex(index: Int): void;
    getHeldItemIndex(): Int;

    /**
     * Gets the inventory of the player, i.e. the inventory accessed by 'e'.
     *
     * @return the player's inventory
     */
    getInventory(): Inventory;

    /**
     * Gets the display name for the player,
     * i.e. the name shown in tab list and in the player's nametag.
     * @return the display name
     */
    getDisplayName(): TextComponent;

    /**
     * Sets the name for this player shown in tab list
     *
     * @param textComponent the new name to display
     */
    setTabDisplayName(displayName: TextComponent): void;

    /**
     * Gets the inventory the user currently has open, i.e. a chest.
     *
     * @return the currently opened inventory
     */
    getOpenedInventory(): Inventory;

    armor: {
        /**
         * @return the item in the player's helmet slot
         */
        getHelmet(): Item;

        /**
         * @return the item in the player's chestplate slot
         */
        getChestplate(): Item;

        /**
         * @return the item in the player's leggings slot
         */
        getLeggings(): Item;

        /**
         * @return the item in the player's boots slot
         */
        getBoots(): Item;
    }
}

declare const Player: Player;

declare interface World {
    /**
     * Gets Minecraft's WorldClient object
     *
     * @return The Minecraft WorldClient object
     */
    getWorld(): ObfWorldClient;

    isLoaded(): boolean;

    /**
     * Play a sound at the player location.
     *
     * @param name   the name of the sound
     * @param volume the volume of the sound
     * @param pitch  the pitch of the sound
     */
    playSound(name: string, volume: Float, pitch: Float): void;

    /**
     * Play a record at location x, y, and z.<br></br>
     * Use "null" as name in the same location to stop record.
     *
     * @param name  the name of the sound/record
     * @param x     the x location
     * @param y     the y location
     * @param z     the z location
     */
    playRecord(name: String, x: Double, y: Double, z: Double): void;

    /**
     * Display a title.
     *
     * @param title    title text
     * @param subtitle subtitle text
     * @param fadeIn   time to fade in
     * @param time     time to stay on screen
     * @param fadeOut  time to fade out
     */
    showTitle(title: string, subtitle: string, fadeIn: Int, time: Int, fadeOut: Int): void;

    isRaining(): boolean;
    getRainingStrength(): Float;
    getTime(): Long;
    getDifficulty(): 'PEACEFUL' | 'EASY' | 'NORMAL' | 'HARD';
    getMoonPhase(): Int;
    getSeed(): Long;
    getType(): string;

    /**
     * Gets the `Block` at a location in the world.
     *
     * @param x the x position
     * @param y the y position
     * @param z the z position
     * @return the `Block` at the location
     */
    getBlockAt(x: Int, y: Int, z: Int): Block;

    /**
     * Gets all of the players in the world, and returns their wrapped versions.
     *
     * @return the players
     */
    getAllPlayers(): PlayerMP[];

    /**
     * Gets a player by their username, must be in the currently loaded world!
     *
     * @param name the username
     * @return the player with said username
     * @throws `IllegalArgumentException` if the player is not valid
     */
    getPlayerByName(name: string): PlayerMP;

    hasPlayer(name: string): boolean;
    getChunk(x: Int, y: Int, z: Int): Chunk;
    getAllEntities(): Entity[];

    /**
     * Gets every entity loaded in the world of a certain class
     *
     * @param clazz the class to filter for (Use `Java.type().class` to get this)
     * @return the entity list
     */
    getAllEntitiesOfType(clazz: JavaClass<'*'>): Entity[];

    /**
     * World border object to get border parameters
     */
    border: {
        /**
         * Gets the border center x location.
         *
         * @return the border center x location
         */
        getCenterX(): Double;

        /**
         * Gets the border center z location.
         *
         * @return the border center z location
         */
        getCenterZ(): Double;

        /**
         * Gets the border size.
         *
         * @return the border size
         */
        getSize(): Int;

        /**
         * Gets the border target size.
         *
         * @return the border target size
         */
        getTargetSize(): Double;

        /**
         * Gets the border time until the target size is met.
         *
         * @return the border time until target
         */
        getTimeUntilTarget(): Long;
    }

    /**
     * World spawn object for getting spawn location.
     */
    spawn: {
        /**
         * Gets the spawn x location.
         *
         * @return the spawn x location.
         */
        getX(): Int;

        /**
         * Gets the spawn x location.
         *
         * @return the spawn x location.
         */
        getY(): Int;

        /**
         * Gets the spawn z location.
         *
         * @return the spawn z location.
         */
        getZ(): Int;
    }

    particle: {
        /**
         * Gets an array of all the different particle names you can pass
         * to `.spawnParticle`
         *
         * @return the array of name strings
         */
        getParticleNames(): string[];

        /**
         * Spawns a particle into the world with the given attributes,
         * which can be configured further with the returned [Particle]
         *
         * @param particle the name of the particle to spawn, see [.getParticleNames]
         * @param x the x coordinate to spawn the particle at
         * @param y the y coordinate to spawn the particle at
         * @param z the z coordinate to spawn the particle at
         * @param xSpeed the motion the particle should have in the x direction
         * @param ySpeed the motion the particle should have in the y direction
         * @param zSpeed the motion the particle should have in the z direction
         * @return the newly spawned particle for further configuration
         */
        spawnParticle(particle: string, x: Double, y: Double, z: Double, xSpeed: Double, ySpeed: Double, zSpeed: Double): Particle | null;

        spawnParticle(particle: ObfuscatedClass<'net.minecraft.client.particle.EntityFX'>): void;
    }
}

declare const World: World;

declare interface Server {
    /**
     * Gets the current server's IP, or "localhost" if the player
     * is in a single-player world.
     *
     * @return The IP of the current server
     */
    getIP(): 'localhost' | string;

    /**
     * Gets the current server's name, or "SinglePlayer" if the player
     * is in a single-player world.
     *
     * @return The name of the current server
     */
    getName(): 'SinglePlayer' | string;

    /**
     * Gets the current server's MOTD, or "SinglePlayer" if the player
     * is in a single-player world.
     *
     * @return The MOTD of the current server
     */
    getMOTD(): 'SinglePlayer' | string;

    /**
     * Gets the ping to the current server, or 5 if the player
     * is in a single-player world.
     *
     * @return The ping to the current server
     */
    getPing(): 5 | Long;
}

declare const Server: Server;

declare class Inventory {
    inventory: ObfIInventory | null;
    container: ObfContainer | null;

    constructor(inventory: ObfIInventory);
    constructor(container: ObfContainer);

    /**
     * Gets the total size of the Inventory.
     * The player's inventory size is 36, 27 for the main inventory, plus 9 for the hotbar.
     * A single chest's size would be 63, because it also counts the player's inventory.
     *
     * @return the size of the Inventory
     */
    getSize(): Int;

    /**
     * Gets the item in any slot, starting from 0.
     *
     * @param slot the slot index
     * @return the Item in that slot
     */
    getStackInSlot(slot: Int): Item;

    /**
     * Returns the window identifier number of this Inventory.
     * This Inventory must be backed by a Container `.isContainer()`
     *
     * @return the window id
     */
    getWindowId(): Int;

    doAction(action: Action): void;

    /**
     * Checks if an item can be shift clicked into a certain slot, i.e coal into the bottom of a furnace.
     *
     * @param slot the slot index
     * @param item the item for checking
     * @return whether or not it can be shift clicked in
     */
    isItemValidForSlot(slot: Int, item: Item): boolean;

    /**
     * Checks whether the inventory contains the given item.
     *
     * @param item the item to check for
     * @return whether or not the inventory contains the item
     */
    contains(item: Item): boolean;

    /**
     * Gets the index of any item in the inventory, and returns the slot number.
     * Returns -1 if the inventory does not contain the item.
     *
     * @param item the item to check for
     * @return the index of the given item
     */
    indexOf(item: Item): Int;

    /**
     * Returns true if this Inventory wraps a Container object
     * rather than an IInventory object
     *
     * @return if this is a container
     */
    isContainer(): boolean;

    /**
     * Shorthand for `ClickAction`
     *
     * @param slot the slot to click on
     * @param shift whether shift is being held
     * @return this inventory for method chaining
     */
    click(slot: Int, shift: boolean): this;

    /**
     * Shorthand for `DropAction`
     *
     * @param slot the slot to drop
     * @param ctrl whether control should be held (drops whole stack)
     * @return this inventory for method chaining
     */
    drop(slot: Int, ctrl: boolean): this;

    /**
     * Shorthand for `DragAction`
     *
     * @param type what click type this should be: LEFT, MIDDLE, RIGHT
     * @param slots all of the slots to drag onto
     * @return this inventory for method chaining
     */
    drag(type: 'LEFT' | 'RIGHT' | 'MIDDLE', ...slots: Int[]): this;

    /**
     * Gets the name of the inventory, simply "container" for most chest-like blocks.
     *
     * @return the name of the inventory
     */
    getName(): string;

    getClassName(): string;
    toString(): string;
}

declare interface TabList {
    /**
     * Gets names set in scoreboard objectives
     *
     * @return The formatted names
     */
    getNamesByObjectives(): string[];

    /**
     * Gets all names in tabs without formatting
     *
     * @return the unformatted names
     */
    getNames(): string[];

    getHeaderMessage(): Message;
    getHeader(): string;
    setHeader(header: string | Message | TextComponent): void;
    getFooterMessage(): Message;
    getFooter(): string;
    setFooter(footer: string | Message | TextComponent): void;
}

declare const TabList: TabList;

declare namespace Scoreboard {
    /**
     * Alias for `Scoreboard.getTitle`.
     *
     * @return the scoreboard title
     */
    declare function getScoreboardTitle(): string;

    /**
     * Gets the top-most string which is displayed on the scoreboard. (doesn't have a score on the side).
     * Be aware that this can contain color codes.
     *
     * @return the scoreboard title
     */
    declare function getTitle(): string;

    /**
     * Get all currently visible strings on the scoreboard. (excluding title)
     * Be aware that this can contain color codes.
     *
     * @return the list of lines
     */
    declare function getLines(): Scoreboard.Score[];

    /**
     * Gets the line at the specified index (0 based)
     * Equivalent to Scoreboard.getLines().get(index)
     *
     * @param index the line index
     * @return the score object at the index
     */
    declare function getLineByIndex(index: Int): Scoreboard.Score;

    /**
     * Gets a list of lines that have a certain score,
     * i.e. the numbers shown on the right
     *
     * @param score the score to look for
     * @return a list of actual score objects
     */
    declare function getLinesByScore(score: Int): Scoreboard.Score[];

    /**
     * Sets a line in the scoreboard to the specified name and score.
     *
     * @param score the score value for this item
     * @param line the string to display on said line
     * @param override whether or not to remove old lines with the same score
     */
    declare function setLine(score: Int, line: String, override: boolean): void;

    declare function setShouldRender(shouldRender: boolean): void;
    declare function getShouldRender(): boolean;
    declare function resetCache(): void;

    declare abstract class Score {
        constructor(score: ObfuscatedClass<'net.minecraft.scoreboard.Score'>);

        /**
         * Gets the score point value for this score,
         * i.e. the number on the right of the board
         *
         * @return the actual point value
         */
        getPoints(): Int;

        /**
         * Gets the display string of this score
         *
         * @return the display name
         */
        getName(): string;

        toString(): string;
    }
}

declare const Scoreboard: Scoreboard;

declare interface CPS {
    getLeftClicksMax(): Int;
    getRightClicksMax(): Int;
    getLeftClicks(): Int;
    getRightClicks(): Int;
    getLeftClicksAverage(): Int;
    getRightClicksAverage(): Int;
}

declare const CPS: CPS;

/////////////////////
// WRAPPER OBJECTS //
/////////////////////

declare class Entity {

}

declare class Item {
    readonly item: ObfItem;
    itemStack: ObfItemStack;

    constructor(itemStack: ObfItemStack);
    constructor(itemName: string);
    constructor(itemID: Int);
    constructor(block: Block);
    constructor(entityItem: ObfuscatedClass<'net.minecraft.entity.Item.EntityItem'>);

    /**
     * Created an Item object from an Entity.
     * Has to be wrapping an EntityItem.
     *
     * @param entity the Entity
     */
    constructor(entity: Entity);

    getID(): Int;
    getStackSize(): Int;
    setStackSize(stackSize: Int): this;

    /**
     * Gets the item's unlocalized name.
     * Example: `tile.wood`
     *
     * @return the item's unlocalized name
     */
    getUnlocalizedName(): string;

    /**
     * Gets the item's registry name.
     * Example: `minecraft:planks`
     *
     * @return the item's registry name
     */
    getRegistryName(): string;

    /**
     * Gets the item's stack display name.
     * Example: `Oak Wood Planks`
     *
     * @return the item's stack display name
     */
    getName(): string;

    getEnchantments(): {
        [key: string]: Int;
    }

    isEnchantable(): boolean;
    isEnchanted(): boolean;
    getItemNBT(): string;
    getMetadata(): string;
    canPlaceOn(block: Block): boolean;
    canHarvest(block: Block): boolean;
    canDestroy(block: Block): boolean;

    /**
     * Gets the items durability, i.e. the number of uses left
     *
     * @return the items durability
     */
    getDurability(): Int;

    getDamage(): Int;
    setDamage(damage: Int): this;
    getMaxDamage(): Int;
    isDamagable(): boolean;
    getLore(): string[];
    draw(x: Float, y: Float, z: Float): void;
    equals(other: unknown): boolean;
    toString(): string;
}

declare class Block {

}

declare class Particle {

}

declare class Message {

}

declare class Text {

}

declare class PotionEffect {

}

//#endregion
